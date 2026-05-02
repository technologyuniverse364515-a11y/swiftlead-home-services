/**
 * BUTTONS CONFIG — All CTAs in one place.
 * Edit here to change button text/links across the entire site.
 */
export const buttons = {
  callNow: {
    text: "Call Now — 24/7 Emergency",
    shortText: "Call Now",
    link: "tel:+18005551234",
    phoneDisplay: "(800) 555-1234",
  },
  requestQuote: {
    text: "Get Free Quote",
    link: "/quote",
  },
  emergencyHelp: {
    text: "Emergency Help Now",
    link: "/emergency",
  },
  viewServices: {
    text: "View All Services",
    link: "/services",
  },
  bookOnline: {
    text: "Book Online",
    link: "/quote",
  },
  viewReviews: {
    text: "Read Reviews",
    link: "/reviews",
  },
  trustBadges: {
    text: "View Credentials",
    link: "/trust",
  },
  scheduleService: {
    text: "Schedule Service",
    link: "/quote",
  },
} as const;

export type ButtonKey = keyof typeof buttons;
