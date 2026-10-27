// ============================================================
// All wedding-specific content lives here. Replace these values
// with the real client details — the components read from this
// file only, so nothing else needs to change.
// ============================================================

// Story chapters — finished Canva page designs (artwork + copy baked in).
import storyCard1 from "../assets/1.png";
import storyCard2 from "../assets/2.png";
import storyCard3 from "../assets/3.png";
import storyCard4 from "../assets/4.png";
import storyCard5 from "../assets/5.png";
import materialFabric from "../assets/emerald-gold-fabrics.jpg";
import weddingMusic from "../assets/the-best-part.mp3";

const weddingData = {
  couple: {
  groomName: "Courage",
  brideName: "Ifeoluwa",
  fullTitle: "Ifeoluwa & Courage",
  tagline: "Two hearts, one beautiful journey.",
},

hashtag: "#MEETTHEAFEMIJES",

// Full-screen pre-intro shown before the invitation itself.
splash: {
  title: "Meet The Afemijes",
  subtitle: "Ifeoluwa & Courage · 29 Dec 2026",
},

  weddingDate: "2026-12-29T09:00:00", 

  hero: {
  heading: "Ifeoluwa & Courage",
  eyebrow: "Meet The Afemijes",
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
      "Some love stories start with a plan. Ours started with a wrong number, a wrong group and a strange DM.",
    cards: [
      {
        src: storyCard1,
        alt: "Chapter one — 2018: Wrong Number, Right Girl",
      },
      {
        src: storyCard2,
        alt: "Chapter two — 2018: The Boldest First Night",
      },
      {
        src: storyCard3,
        alt: "Chapter three — 2020: He's My Boyfriend",
      },
      {
        src: storyCard4,
        alt: "Chapter four — 2025: A Man Went on His Knees",
      },
      {
        src: storyCard5,
        alt: "Chapter five — 2026: Meet The Afemijes",
      },
    ],
  },

events: [
  {
    id: "wedding-ceremony",
    name: "Wedding Ceremony",
    date: "Tuesday, 29th December 2026",
    time: "12:00 PM",
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
    { name: "Gold", hex: "#C9A227" },
  ],
},

  material: {
    heading: "Wedding Material",
    body:
      "To help us create a beautiful and coordinated celebration, guests who would like to participate can get the official wedding material — a Cap or a Gele — from our designated contact.",
    image: materialFabric,
    imageAlt:
      "Emerald and gold draped satin fabric — the aso-ebi colours of the day",
    items: [
      { name: "Cap", price: "₦5,000" },
      { name: "Gele", price: "₦15,000" },
    ],
    colour: "Emerald & Gold",
    paymentDeadline: "22nd November 2026",
    contactPerson: "The Afemije Family",
    phoneNumber: "09036218330",
    whatsappNumber: "2349036218330",
    whatsappMessage:
      "Hello! I'd like to get the wedding material (Cap / Gele) for Ifeoluwa & Courage's wedding.",
    ctaLabel: "Get Material",
  },

  gallery: {
    heading: "Gallery",
    intro: "A few of our favourite moments together.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        alt: "Ifeoluwa and Courage laughing together outdoors",
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

  // Background soundtrack — a single, discreet, visitor-controlled toggle.
  // Bundled locally (src/assets) so it always ships with the site — no external host.
  music: {
    src: weddingMusic,
    label: "Play wedding soundtrack",
    pauseLabel: "Pause wedding soundtrack",
    defaultVolume: 0.25,
  },

  rsvp: {
  heading: "We'd Love to Celebrate With You",
  body:
    "Kindly let us know if you'll be joining us, either through our online form or WhatsApp.",
  googleFormUrl: "https://forms.gle/tviCkn1cngcZfesZ8",
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
    items: [
      { name: "Cap", price: "₦5,000" },
      { name: "Gele", price: "₦15,000" },
    ],
    paymentDeadline: "22nd November 2026",
    bankName: "Opay",
    accountName: "Courage Udulishe Afemije",
    accountNumber: "8139981589",
    copyLabel: "Copy Account Number",
    copiedLabel: "Account number copied!",
  },

  contact: {
  heading: "Get in Touch",
  contactPerson: "Our Event Planner",
  phoneNumber: "08108393317",
  whatsappNumber: "2348108393317",
  whatsappMessage:
    "Hello! I have a question about Ifeoluwa & Courage's wedding.",
},

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What should I wear?",
        answer:
          "We'd love to see you in our wedding colours — emerald, ivory, and champagne gold. Comfortable, elegant attire is encouraged for both ceremonies.",
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
          "The wedding material is a Cap (₦5,000) or a Gele (₦15,000). Reach our contact on WhatsApp before the payment deadline — details are in the 'Wedding Material' section.",
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
    message: "With love, Ifeoluwa & Courage.",
  },
};

export default weddingData;
