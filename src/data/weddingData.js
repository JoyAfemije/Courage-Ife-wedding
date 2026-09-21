// ============================================================
// All wedding-specific content lives here. Replace these values
// with the real client details — the components read from this
// file only, so nothing else needs to change.
// ============================================================

const weddingData = {
  couple: {
  groomName: "Courage",
  brideName: "Ifeoluwa",
  fullTitle: "Ifeoluwa & Courage",
  tagline: "Two hearts, one beautiful journey.",
},

hashtag: "#MEETTHEAFEMIJES",

  weddingDate: "2026-12-29T09:00:00", 

  hero: {
  heading: "Ifeoluwa & Courage",
  subheading: "Two hearts, one beautiful journey.",
  dateDisplay: "Tuesday, 29th December 2026",
  location: "Ibadan, Nigeria",
  image:
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  ctaPrimary: "RSVP",
  ctaSecondary: "View Our Story",
},

  intro: {
    heading: "You Are Invited",
    body:
      "With grateful hearts and joyful spirits, we invite you to celebrate the beginning of our forever. Your presence would mean the world to us as we say 'I do' surrounded by the people we love most.",
  },

  story: {
    heading: "Our Story",
    intro:
      "Every love story is beautiful, but ours is our favourite. Here's a little of how we got here.",
    milestones: [
      {
        year: "2019",
        title: "How We Met",
        description:
          "We met at a mutual friend's birthday dinner in Lekki. Courage swears it was love at first sight; Ife says it took her a little longer to admit it.",
      },
      {
        year: "2021",
        title: "Our Journey",
        description:
          "Through late-night phone calls, weekend suya runs, and a few road trips, we became each other's favourite people and closest friends.",
      },
      {
        year: "2024",
        title: "The Proposal",
        description:
          "Courage proposed on a quiet Sunday evening at the beach in Victoria Island, with close family secretly watching from a distance. Ife said yes before he even finished the sentence.",
      },
      {
        year: "2026",
        title: "Forever Begins",
        description:
          "Now, we're counting down the days to becoming husband and wife, and we can't wait to celebrate this next chapter with the people who mean the most to us.",
      },
    ],
  },

events: [
  {
    id: "traditional",
    name: "Traditional Wedding",
    date: "Tuesday, 29th December 2026",
    time: "8:00 AM", // placeholder — update with the real time
    venue: "Havana Royal",
    address: "Beside First Bank, UI First Gate, Ibadan",
    mapsUrl: "https://maps.google.com/?q=Havana+Royal+UI+First+Gate+Ibadan",
  },
  {
    id: "wedding-ceremony",
    name: "Wedding Ceremony",
    date: "Tuesday, 29th December 2026",
    time: "9:00 AM", // placeholder — update once confirmed
    venue: "Sycamore Church",
    address: "Samonda, Ibadan",
    mapsUrl: "https://maps.google.com/?q=Sycamore+Church+Samonda+Ibadan",
  },
  {
    id: "reception",
    name: "Reception",
    date: "Tuesday, 29th December 2026",
    time: "Immediately after the ceremony",
    venue: "Havana Royal",
    address: "Beside First Bank, UI First Gate, Ibadan",
    mapsUrl: "https://maps.google.com/?q=Havana+Royal+UI+First+Gate+Ibadan",
  },
],

  colours: {
  heading: "Colours of the Day",
  note: "We can't wait to see you dressed in the colours of our special day.",
  palette: [
    { name: "Emerald", hex: "#14532D" },
    { name: "Deep Forest", hex: "#0B2B20" },
    { name: "Gold", hex: "#C9A227" },
    { name: "Ivory", hex: "#F8F4E8" },
  ],
},

  material: {
    heading: "Wedding Material",
    body:
      "To help us create a beautiful and coordinated celebration, guests who would like to participate can get the official wedding material from our designated contact.",
    materialType: "Premium Wine Damask (George)",
    colour: "Wine & Gold",
    pickupLocation: "Balogun Market, Complex B, Shop 24, Lagos Island",
    contactPerson: "Aunty Bisi",
    phoneNumber: "+2348012345678",
    whatsappNumber: "2348187894148",
    whatsappMessage:
      "Hello Aunty Bisi, I'd like to get the wedding material for Courage & Ife's wedding.",
    ctaLabel: "Get Material",
  },

  gallery: {
    heading: "Gallery",
    intro: "A few of our favourite moments together.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        alt: "Courage and Ife laughing together outdoors",
        span: "tall",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
        alt: "Close-up of engagement ring",
        span: "normal",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
        alt: "Couple walking hand in hand",
        span: "normal",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
        alt: "Couple at sunset by the beach",
        span: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
        alt: "Couple dancing together",
        span: "normal",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Wedding rings on display",
        span: "tall",
      },
    ],
  },

  rsvp: {
  heading: "We'd Love to Celebrate With You",
  body:
    "Kindly let us know if you'll be joining us, either through our online form or WhatsApp.",
  googleFormUrl: "https://forms.google.com/replace-with-ifeoluwa-and-courage-rsvp-form",
  ctaLabel: "RSVP Now",
  whatsappNumber: "2348187894148",
  whatsappMessage:
    "Hello! I would like to RSVP for Ifeoluwa & Courage's wedding.\n\nName:\nNumber of Guests:\nWill you be attending? Yes/No",
},

  guestWishes: {
    heading: "Leave a Wish",
    body:
      "We'd love to hear your kind words, prayers, and blessings as we begin this new chapter.",
    googleFormUrl:
      "https://forms.google.com/replace-with-courage-and-ife-wishes-form",
    ctaLabel: "Leave a Wish",
  },

  support: {
    heading: "Celebrate With Us",
    body:
      "Your presence is the greatest gift. However, if you would like to bless us further, we've made it easy for you to do so.",
    bankName: "GTBank",
    accountName: "Courage & Ife Wedding",
    accountNumber: "0123456789",
    paymentLink: "https://paystack.com/pay/replace-with-courage-and-ife-gift",
    copyLabel: "Copy Account Number",
    copiedLabel: "Account number copied!",
    onlineLabel: "Send a Gift Online",
  },

  contact: {
  heading: "Get in Touch",
  contactPerson: "The Afemije Family",
  phoneNumber: "+2348187894148",
  whatsappNumber: "2348187894148",
  email: "hello@ifeoluwaandcourage.com",
},

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What should I wear?",
        answer:
          "We'd love to see you in our wedding colours — wine, cream, and champagne gold. Comfortable, elegant attire is encouraged for both ceremonies.",
      },
      {
        question: "What are the wedding colours?",
        answer:
              "Our colours are emerald and gold. See the 'Colours of the Day' section above for the full palette.",
      },
      {
        question: "How do I RSVP?",
        answer:
          "You can RSVP using the online form in the RSVP section, or send us a message directly on WhatsApp. We kindly ask that you RSVP by 30th November 2026.",
      },
      {
        question: "Can I bring a plus one?",
        answer:
          "Our celebration is by invitation, and seating is limited. Please indicate any additional guests when you RSVP, and we'll confirm with you.",
      },
      {
        question: "Where can I get the wedding material?",
        answer:
          "Details on where to purchase the official aso-ebi material are available in the 'Wedding Material' section, including our contact person's number.",
      },
      {
        question: "Is there parking available?",
        answer:
          "Yes, secure parking will be available at all three venues, with ushers on hand to help direct you.",
      },
      {
        question: "Where can I find the venues?",
        answer:
          "Each event card includes a 'View Location' button that opens the exact address in Google Maps for easy directions.",
      },
      {
        question: "How can I send a gift?",
        answer:
          "You'll find our account details and an online gifting link in the 'Celebrate With Us' section, should you wish to bless us.",
      },
    ],
  },

  finalCta: {
    heading: "We Can't Wait to Celebrate With You",
    ctaLabel: "RSVP Now",
  },

  socials: [
    { platform: "Instagram", url: "https://instagram.com/courageandife" },
  ],

  footer: {
    message: "With love, Courage & Ife.",
  },
};

export default weddingData;
