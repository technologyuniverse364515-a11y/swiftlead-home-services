import { Phone, MessageSquare } from "lucide-react";
import { buttons } from "@/config/buttons";
import { Link } from "@tanstack/react-router";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 px-3 py-3 shadow-elegant backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={buttons.callNow.link}
          className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-accent animate-pulse-ring"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          to={buttons.requestQuote.link as "/quote"}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
        >
          <MessageSquare className="h-4 w-4" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
