import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Tag } from "lucide-react";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";

const STORAGE_KEY = "profix-exit-popup-shown";

export function ExitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.removeEventListener("mouseout", handler);
      }
    };

    // Mobile fallback: trigger after 25s of inactivity scrolling up
    const t = setTimeout(() => {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    }, 35000);

    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
      clearTimeout(t);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm animate-fade-up"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-background shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-smooth hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="bg-gradient-accent p-6 text-accent-foreground">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            <Tag className="h-3 w-3" />
            LIMITED OFFER
          </div>
          <h3 className="font-display text-2xl font-bold">{messages.exitPopup.title}</h3>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">{messages.exitPopup.body}</p>
          <Link
            to={buttons.requestQuote.link as "/quote"}
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
          >
            {messages.exitPopup.cta}
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 block w-full text-center text-xs text-muted-foreground hover:underline"
          >
            {messages.exitPopup.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
