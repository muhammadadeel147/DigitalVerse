type LeadFormType = "contact" | "book_demo";

type LeadFormPayload = Record<string, string>;

type LeadFormResponse = {
  success: boolean;
  message: string;
};

const getLeadFormEndpoint = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}api/form-handler.php`;
};

export const submitLeadForm = async (
  formType: LeadFormType,
  payload: LeadFormPayload,
): Promise<LeadFormResponse> => {
  const response = await fetch(getLeadFormEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      formType,
      ...payload,
    }),
  });

  let data: LeadFormResponse | null = null;
  try {
    data = (await response.json()) as LeadFormResponse;
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Unable to submit your request right now. Please try again.");
  }

  return data;
};