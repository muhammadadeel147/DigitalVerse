<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

const TARGET_EMAILS = [
    'info@nexmindsystems.com',
    'muhammaddadeel90@gmail.com'
];

respondPreflight();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

$input = getRequestInput();
$formType = sanitizeSingleLine($input['formType'] ?? '', 40);
$honeypot = sanitizeSingleLine($input['website'] ?? '', 255);

if ($honeypot !== '') {
    // Pretend success for bots without sending an email.
    respond(200, true, 'Thanks. Your request has been received.');
}

if ($formType === 'contact') {
    handleContactSubmission($input);
}

if ($formType === 'book_demo') {
    handleBookDemoSubmission($input);
}

respond(400, false, 'Invalid form type.');

function respondPreflight(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function getRequestInput(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

    if (stripos($contentType, 'application/json') !== false) {
        $rawBody = file_get_contents('php://input');
        if (!is_string($rawBody) || trim($rawBody) === '') {
            return [];
        }

        $decoded = json_decode($rawBody, true);
        if (json_last_error() !== JSON_ERROR_NONE || !is_array($decoded)) {
            respond(400, false, 'Invalid JSON payload.');
        }

        return $decoded;
    }

    if (!empty($_POST)) {
        return $_POST;
    }

    $rawBody = file_get_contents('php://input');
    if (!is_string($rawBody) || trim($rawBody) === '') {
        return [];
    }

    parse_str($rawBody, $parsed);
    return is_array($parsed) ? $parsed : [];
}

function handleContactSubmission(array $input): void
{
    $fullName = sanitizeSingleLine($input['fullName'] ?? '', 120);
    $email = sanitizeEmail($input['email'] ?? '');
    $company = sanitizeSingleLine($input['company'] ?? '', 120);
    $subject = sanitizeSingleLine($input['subject'] ?? '', 160);
    $message = sanitizeMultiline($input['message'] ?? '', 4000);

    if ($fullName === '' || $email === '' || $subject === '' || $message === '') {
        respond(422, false, 'Please fill in all required contact fields.');
    }

    $finalSubject = '[Website Contact] ' . $subject;

    $lines = [
        'Form: Contact',
        'Submitted: ' . gmdate('c'),
        'IP: ' . getClientIp(),
        '',
        'Full Name: ' . $fullName,
        'Email: ' . $email,
        'Company: ' . ($company !== '' ? $company : 'Not provided'),
        'Subject: ' . $subject,
        '',
        'Message:',
        $message,
    ];

    sendEmailOrFail($finalSubject, implode("\n", $lines), $email);
    respond(200, true, 'Thanks. Your message has been sent successfully.');
}

function handleBookDemoSubmission(array $input): void
{
    $name = sanitizeSingleLine($input['name'] ?? '', 120);
    $email = sanitizeEmail($input['email'] ?? '');
    $company = sanitizeSingleLine($input['company'] ?? '', 120);
    $phone = sanitizeSingleLine($input['phone'] ?? '', 80);
    $preferredDate = sanitizeSingleLine($input['preferredDate'] ?? '', 80);
    $message = sanitizeMultiline($input['message'] ?? '', 4000);

    if ($name === '' || $email === '') {
        respond(422, false, 'Please fill in full name and email.');
    }

    $finalSubject = '[Website Demo Request] ' . ($company !== '' ? $company : $name);

    $lines = [
        'Form: Book Demo',
        'Submitted: ' . gmdate('c'),
        'IP: ' . getClientIp(),
        '',
        'Name: ' . $name,
        'Email: ' . $email,
        'Company: ' . ($company !== '' ? $company : 'Not provided'),
        'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
        'Preferred Date/Time: ' . ($preferredDate !== '' ? $preferredDate : 'Not provided'),
        '',
        'Additional Information:',
        $message !== '' ? $message : 'Not provided',
    ];

    sendEmailOrFail($finalSubject, implode("\n", $lines), $email);
    respond(200, true, 'Thanks. Your demo request has been received.');
}

function sendEmailOrFail(string $subject, string $body, string $replyTo): void
{
    $host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['HTTP_HOST'] ?? 'nexmindsystems.com');
    $fromDomain = (is_string($host) && strpos($host, '.') !== false) ? $host : 'nexmindsystems.com';
    $fromEmail = 'no-reply@' . $fromDomain;

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: NexMindSystems Website <' . $fromEmail . '>',
        'Reply-To: ' . $replyTo,
    ];

    $recipients = implode(',', TARGET_EMAILS);
    $ok = @mail($recipients, $subject, $body, implode("\r\n", $headers));
    if ($ok !== true) {
        respond(500, false, 'Unable to send email right now. Please try again shortly.');
    }
}

function sanitizeSingleLine($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    $cleaned = trim(str_replace(["\r", "\n"], ' ', $value));
    if ($maxLength > 0) {
        $cleaned = strTruncate($cleaned, $maxLength);
    }

    return $cleaned;
}

function sanitizeMultiline($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    $cleaned = str_replace("\r", "", trim($value));
    if ($maxLength > 0) {
        $cleaned = strTruncate($cleaned, $maxLength);
    }

    return $cleaned;
}

function sanitizeEmail($value): string
{
    if (!is_string($value)) {
        return '';
    }

    $email = trim($value);
    if ($email === '') {
        return '';
    }

    $validEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($validEmail === false) {
        return '';
    }

    return (string) $validEmail;
}

function getClientIp(): string
{
    $keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];

    foreach ($keys as $key) {
        $value = $_SERVER[$key] ?? '';
        if (!is_string($value) || trim($value) === '') {
            continue;
        }

        $ip = trim(explode(',', $value)[0]);
        if ($ip !== '') {
            return $ip;
        }
    }

    return 'Unknown';
}

function strTruncate(string $value, int $maxLength): string
{
    if (function_exists('mb_substr')) {
        return (string) mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function respond(int $statusCode, bool $success, string $message): void
{
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ], JSON_UNESCAPED_SLASHES);
    exit;
}
