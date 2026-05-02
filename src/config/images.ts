/**
 * IMAGES CONFIG — All media in one place.
 */
import hero from "@/assets/hero-plumber.jpg";
import plumbing from "@/assets/service-plumbing.jpg";
import electrical from "@/assets/service-electrical.jpg";
import hvac from "@/assets/service-hvac.jpg";
import team from "@/assets/team-trust.jpg";
import city from "@/assets/city-neighborhood.jpg";

export const images = {
  hero,
  team,
  city,
  services: {
    plumbing,
    electrical,
    hvac,
  } as Record<string, string>,
  // Optional CDN logos for trust strip
  trustLogos: [
    { name: "BBB A+", url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Better_Business_Bureau_logo.svg" },
    { name: "Angi", url: "https://www.angi.com/favicon.ico" },
    { name: "Google", url: "https://www.google.com/favicon.ico" },
    { name: "Yelp", url: "https://s3-media0.fl.yelpcdn.com/assets/srv0/seo_metadata/d6dc16c81ecb/assets/img/logos/yelp_og_image.png" },
  ],
} as const;
