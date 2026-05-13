import { COMPANY } from "@/lib/site";
import { MessageCircle } from "lucide-react";
export function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
