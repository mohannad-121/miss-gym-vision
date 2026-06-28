import { MessageCircle } from "lucide-react";

export function WhatsAppFloat({ phone = "962792570090" }: { phone?: string }) {
  const number = phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={26} />
    </a>
  );
}

export function DemoBadge() {
  return (
    <div className="fixed bottom-6 left-6 z-40 glass-pink px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-pink-hot animate-pulse" />
      Demo Version
    </div>
  );
}
