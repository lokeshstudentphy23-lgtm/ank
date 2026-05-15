import { buildWhatsAppLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

type Props = { packageName?: string };

export function WhatsAppButton({ packageName }: Props) {
  const message = packageName
    ? `Hi, I am interested in the ${packageName} package. Please share details.`
    : "Hi, I'd like to enquire about a tour/bus hire.";
  const href = buildWhatsAppLink(message);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 active:scale-95"
    >
      <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-navy px-3 py-1.5 text-xs font-medium text-navy-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
