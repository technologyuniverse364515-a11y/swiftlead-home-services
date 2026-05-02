import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

interface Props {
  city?: { name: string; state: string };
}

/**
 * LocalBusiness JSON-LD for SEO. Renders a script tag.
 * Use city prop on city pages for hyper-local schema.
 */
export function LocalBusinessSchema({ city }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "Electrician", "HVACBusiness"],
    name: text.brand.name,
    description: text.heroSubtitle,
    telephone: buttons.callNow.link.replace("tel:", ""),
    priceRange: "$$",
    image: typeof window !== "undefined" ? window.location.origin + "/og-image.jpg" : undefined,
    address: city
      ? {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: "US",
        }
      : {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
    areaServed: text.cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, ${c.state}`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: text.brand.rating,
      reviewCount: text.brand.reviewCount,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://facebook.com/profix", "https://instagram.com/profix"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
