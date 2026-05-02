/**
 * MESSAGES CONFIG — All conversion-focused messages, banners & popups.
 */
export const messages = {
  emergencyBanner: "🚨 24/7 Emergency Service — Average response under 60 minutes",
  urgency: "Same-day appointments available — book before 4 PM",
  trustBar: "Licensed • Insured • BBB A+ • 150,000+ jobs completed",

  exitPopup: {
    title: "Wait! Save 15% on Your First Service",
    body: "Book any repair in the next 24 hours and we'll knock 15% off your invoice. Limited to new customers.",
    cta: "Claim My 15% Discount",
    decline: "No thanks, I'll pay full price",
  },

  formSuccess:
    "✅ Thank you! Your request has been received. A dispatcher will call you within 15 minutes.",
  formError: "Something went wrong. Please try again or call us directly.",
  formSubmitting: "Sending your request…",

  promoBar: "💸 New customer? Save 15% on your first service. Use code: NEW15",

  ctaUrgency: "Don't wait — small problems become big bills overnight",

  guarantees: [
    "60-Minute Response Guarantee",
    "Upfront Flat-Rate Pricing",
    "Lifetime Workmanship Warranty",
    "100% Satisfaction or Money Back",
  ],
} as const;
