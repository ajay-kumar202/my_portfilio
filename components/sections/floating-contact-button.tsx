import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function FloatingContactButton() {
  return (
    <Link
      href={siteConfig.whatsapp}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-accent shadow-xl"
    >
      <MessageCircle size={16} />
      Quick Contact
    </Link>
  );
}
