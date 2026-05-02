import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmergencyBanner } from "./EmergencyBanner";
import { StickyCTA } from "./StickyCTA";
import { ExitPopup } from "./ExitPopup";
import { LocalBusinessSchema } from "./LocalBusinessSchema";

interface Props {
  children: ReactNode;
  city?: { name: string; state: string };
}

export function SiteLayout({ children, city }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <EmergencyBanner />
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
      <ExitPopup />
      <LocalBusinessSchema city={city} />
    </div>
  );
}
