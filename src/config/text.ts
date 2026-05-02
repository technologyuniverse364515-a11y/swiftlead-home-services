/**
 * TEXT CONFIG — All site copy.
 * Edit here to change content across the entire site.
 */
export const text = {
  brand: {
    name: "ProFix Home Services",
    tagline: "Trusted Home Repair Experts",
    yearsInBusiness: 25,
    technicians: 80,
    homesServed: "150,000+",
    rating: 4.9,
    reviewCount: 3247,
  },

  // Hero
  heroTitle: "24/7 Emergency Home Repair Experts You Can Trust",
  heroSubtitle:
    "Fast, reliable Plumbing, Electrical & HVAC services across the USA. Licensed pros at your door in 60 minutes — guaranteed.",
  heroBadge: "Trusted by 150,000+ Homeowners",

  // Generic
  emergencyTitle: "Need Help Right Now? We're On Our Way.",
  emergencySubtitle:
    "Burst pipe? Power outage? AC failure? Our certified emergency techs are dispatched 24/7/365.",
  trustTitle: "Licensed, Insured & Certified Professionals",
  trustSubtitle:
    "Every technician is background-checked, drug-tested, and certified by industry-leading bodies.",
  quoteTitle: "Get Your Free, No-Obligation Quote",
  quoteSubtitle: "Tell us what you need — we'll respond within 15 minutes.",
  reviewsTitle: "What 150,000+ Homeowners Say",
  reviewsSubtitle: "Real reviews from real customers across the country.",

  // Services
  servicesTitle: "Complete Home Repair Services",
  servicesSubtitle:
    "From a leaky faucet to a full HVAC install — one trusted team for every fix.",

  services: [
    {
      slug: "plumbing",
      name: "Plumbing",
      icon: "Wrench",
      tagline: "Leaks, clogs & repipes",
      short: "Emergency plumbing repair, drain cleaning, water heaters, leak detection & full repipes.",
      description:
        "From a slow-draining sink to a catastrophic pipe burst, our master plumbers carry the parts, tools, and expertise to fix it right the first time. We service every brand of fixture, water heater, and water-treatment system on the market.",
      features: [
        "24/7 emergency leak repair",
        "Drain cleaning & hydro-jetting",
        "Water heater install & repair",
        "Sewer line repair & replacement",
        "Whole-home repiping",
        "Water filtration systems",
      ],
      pricing: "Service calls from $49",
      response: "Average arrival: 47 minutes",
    },
    {
      slug: "electrical",
      name: "Electrical",
      icon: "Zap",
      tagline: "Panels, wiring & EV chargers",
      short: "Panel upgrades, rewiring, lighting, EV chargers & whole-home surge protection.",
      description:
        "Licensed master electricians handle everything from a flickering light to a full home rewire. We're certified for residential code in all 50 states and carry the highest insurance limits in the industry.",
      features: [
        "Electrical panel upgrades",
        "Whole-home rewiring",
        "EV charger installation",
        "Lighting design & install",
        "Surge protection systems",
        "Generator installation",
      ],
      pricing: "Diagnostics from $79",
      response: "Same-day appointments available",
    },
    {
      slug: "hvac",
      name: "Heating & Cooling",
      icon: "Wind",
      tagline: "AC, heating & air quality",
      short: "AC repair, furnace service, heat pump install & indoor air quality solutions.",
      description:
        "NATE-certified HVAC techs service every major brand. From a no-cool emergency at 2 AM to a high-efficiency heat-pump retrofit, we deliver comfort that lasts and energy bills that drop.",
      features: [
        "AC repair & installation",
        "Furnace & heat pump service",
        "Annual maintenance plans",
        "Indoor air quality systems",
        "Smart thermostat install",
        "Duct cleaning & sealing",
      ],
      pricing: "Tune-ups from $89",
      response: "Same-day repair, most cases",
    },
  ],

  // Cities
  cities: [
    { slug: "austin", name: "Austin", state: "TX", zip: "78701" },
    { slug: "dallas", name: "Dallas", state: "TX", zip: "75201" },
    { slug: "houston", name: "Houston", state: "TX", zip: "77002" },
    { slug: "phoenix", name: "Phoenix", state: "AZ", zip: "85001" },
    { slug: "atlanta", name: "Atlanta", state: "GA", zip: "30303" },
    { slug: "denver", name: "Denver", state: "CO", zip: "80202" },
  ],

  // Why us
  whyUs: [
    { title: "Licensed & Insured", desc: "Master licenses in all 50 states. $5M liability coverage on every job." },
    { title: "Upfront Pricing", desc: "Flat-rate quotes before work begins. No surprises, no hourly meter." },
    { title: "60-Minute Response", desc: "Average emergency arrival under 60 minutes — often much faster." },
    { title: "Lifetime Workmanship", desc: "We stand behind every repair with a written lifetime guarantee." },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah M.",
      city: "Austin, TX",
      rating: 5,
      text: "Burst pipe at 11 PM on a Sunday. ProFix had a tech here in 38 minutes, fixed in under two hours, and the price was exactly what they quoted. Lifesavers.",
      service: "Emergency Plumbing",
    },
    {
      name: "James T.",
      city: "Dallas, TX",
      rating: 5,
      text: "Got three quotes for a panel upgrade. ProFix wasn't the cheapest, but the master electrician spent 30 minutes explaining everything and the install was flawless. Worth every penny.",
      service: "Electrical Panel",
    },
    {
      name: "Linda R.",
      city: "Phoenix, AZ",
      rating: 5,
      text: "AC died during a 115° heat wave. Same-day install of a new high-efficiency unit. Their tech even cleaned up the old refrigerant lines neighbors had left a mess of years ago.",
      service: "HVAC Install",
    },
    {
      name: "Marcus D.",
      city: "Houston, TX",
      rating: 5,
      text: "Best service experience of any contractor I've used in 20 years of homeownership. Polite, on time, immaculate work. Already booked them for the bathroom remodel.",
      service: "Whole-home Repipe",
    },
    {
      name: "Patricia K.",
      city: "Atlanta, GA",
      rating: 5,
      text: "Furnace stopped on the coldest night of the year. Dispatcher kept me updated, tech arrived with the right part on the first truck, fixed in 45 min. Just exceptional.",
      service: "Furnace Repair",
    },
    {
      name: "Robert H.",
      city: "Denver, CO",
      rating: 5,
      text: "Installed an EV charger and upgraded my panel. Permits handled, inspection passed first try, and the work looks like art. Highly recommend.",
      service: "EV Charger Install",
    },
  ],

  // Trust
  certifications: [
    { name: "BBB A+ Accredited", desc: "Better Business Bureau highest rating since 2002" },
    { name: "Master License", desc: "Active master plumber & electrician licenses in all 50 states" },
    { name: "NATE Certified", desc: "North American Technician Excellence — the HVAC gold standard" },
    { name: "Fully Insured", desc: "$5,000,000 general liability + workers comp on every job" },
    { name: "Background Checked", desc: "Every tech: criminal background, drug screen, motor vehicle" },
    { name: "Lifetime Workmanship", desc: "Written lifetime guarantee on all installation work" },
  ],

  // FAQs
  faqs: [
    {
      q: "Do you really provide 24/7 emergency service?",
      a: "Yes. Our dispatch center is staffed around the clock, every day of the year — including holidays. Emergency techs are on-call in every market we serve. Average response under 60 minutes.",
    },
    {
      q: "How much will my repair cost?",
      a: "We use flat-rate pricing — no hourly meters. Your tech will diagnose the issue and give you a written quote BEFORE any work begins. If you don't approve, you only pay the $49 service-call fee.",
    },
    {
      q: "Are your technicians licensed and insured?",
      a: "Every ProFix technician holds the appropriate state and municipal licenses for their trade. We carry $5M in general liability plus full workers compensation. Proof of license/insurance available on request.",
    },
    {
      q: "What's your warranty?",
      a: "All installation work carries a written lifetime workmanship guarantee. Equipment is covered by the manufacturer warranty (often 5–10 years), which we register for you at the time of install.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes — 0% APR for 18 months on qualifying installations over $1,000. Apply in 60 seconds with no impact on your credit score.",
    },
    {
      q: "How quickly can you get to me?",
      a: "Emergency dispatch averages under 60 minutes. Standard appointments can usually be scheduled same-day or next-day. Book online or call to confirm.",
    },
  ],

  // Footer
  footerTagline: "America's most-trusted home repair team. Open 24/7/365.",
  copyright: `© ${new Date().getFullYear()} ProFix Home Services. All rights reserved.`,
} as const;
