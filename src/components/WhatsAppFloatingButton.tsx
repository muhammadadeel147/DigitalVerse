import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";
const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ??
  "Hi, I want to discuss a project with your team.";

const sanitizePhone = (value: string) => value.replace(/\D/g, "");

export const WhatsAppFloatingButton = () => {
  const phone = sanitizePhone(WHATSAPP_NUMBER);

  if (!phone) {
    return null;
  }

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const targetUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    window.location.assign(targetUrl);
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[70] w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.75)] hover:bg-[#22c55e] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center ring-2 ring-white/80"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
    </button>
  );
};
