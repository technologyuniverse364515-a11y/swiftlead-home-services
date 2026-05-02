import { Star, ShieldCheck, Award, BadgeCheck } from "lucide-react";
import { text } from "@/config/text";

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 md:px-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-7 w-7 shrink-0 text-accent" />
          <div>
            <div className="text-sm font-bold text-foreground">Licensed & Insured</div>
            <div className="text-xs text-muted-foreground">All 50 states</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Star className="h-7 w-7 shrink-0 fill-accent text-accent" />
          <div>
            <div className="text-sm font-bold text-foreground">{text.brand.rating} / 5 Rating</div>
            <div className="text-xs text-muted-foreground">{text.brand.reviewCount.toLocaleString()} reviews</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BadgeCheck className="h-7 w-7 shrink-0 text-accent" />
          <div>
            <div className="text-sm font-bold text-foreground">BBB A+ Rated</div>
            <div className="text-xs text-muted-foreground">Since 2002</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Award className="h-7 w-7 shrink-0 text-accent" />
          <div>
            <div className="text-sm font-bold text-foreground">{text.brand.yearsInBusiness}+ Years</div>
            <div className="text-xs text-muted-foreground">Trusted experts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
