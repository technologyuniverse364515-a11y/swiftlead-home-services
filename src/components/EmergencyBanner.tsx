import { AlertTriangle } from "lucide-react";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs font-medium md:px-6 md:text-sm">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 animate-pulse" />
          <span className="truncate">{messages.emergencyBanner}</span>
        </div>
        <a
          href={buttons.callNow.link}
          className="hidden shrink-0 rounded-md bg-white/15 px-3 py-1 font-semibold backdrop-blur transition-smooth hover:bg-white/25 sm:inline-block"
        >
          {buttons.callNow.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
