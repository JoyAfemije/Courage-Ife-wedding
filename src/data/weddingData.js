// ============================================================
// All wedding-specific content lives here. Replace these values
// with the real client details — the components read from this
// file only, so nothing else needs to change.
// ============================================================

import storyChapter1 from "../assets/gallery/IMG_4318.jpg";
import storyChapter2 from "../assets/gallery/IMG_1172.jpg";
import storyChapter3 from "../assets/gallery/IMG_5058.jpg";
import storyChapter4 from "../assets/gallery/IMG_8620.jpg";
import storyChapter5 from "../assets/gallery/IMG_9803.JPG";

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
  subtitle: "Courage & Ife · 29 Dec 2026",
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
    milestones: [
      {
        id: "wrong-number",
        year: "2018",
        title: "Wrong Number, Right Girl",
        description:
          'A mystery number added Courage to "Physiology Freshers." He was not a fresher. He was not in Physiology. Just before tapping "exit group," he slid into three DMs, and only one lady replied. Her name was Ife, and her replies were short, cold, and very much "who is this?" Days later, he wished her a happy belated birthday and refused to say how he knew. "Superpowers," he said. The short replies became long chats (a man knows game). He asked for a picture, got one, and nearly dropped his phone. "What in the world is this beauty?"',
        image: storyChapter1,
        imageAlt: "Courage and Ife's early moment together",
      },
      {
        id: "first-night",
        year: "2018",
        title: "The Boldest First Night",
        description:
          "They met that same evening, and within minutes Courage asked her to be his girlfriend (what's the worst she can say, right?). She said NO (Gbam!). She still teases him about it, and honestly, fair. But she also said he was cool, and that was all the opening he needed.",
        image: storyChapter2,
        imageAlt: "The couple on their first night out",
      },
      {
        id: "just-friends",
        year: "2018 – 2020",
        title: "\u201CHe's My Boyfriend\u201D",
        description:
          'They stayed "just friends." Ife took him on his first-ever date, and she paid. He\'s still blushing. Courage started dressing better, speaking better, and writing: letters, poems, then a song (men mount, men unmount, odogwu dey write love poem, chaiiii). Then one day someone asked Ife who this guy was, and she said, "He\'s my boyfriend." Courage was standing right there, finding out in real time (women shaaaaa…).',
        image: storyChapter3,
        imageAlt: "A date moment from their early years",
      },
      {
        id: "the-proposal",
        year: "2025",
        title: "A Man Went on His Knees",
        description:
          "After years of laughing, growing, and getting each other through everything, asking her to marry him was the easiest decision Courage has ever made.",
        image: storyChapter4,
        imageAlt: "The proposal moment",
      },
      {
        id: "wedding-day",
        year: "2026",
        title: "#MeetTheAfemijes",
        description:
          "On the 29th of December, the girl who said NO on that first night says YES to forever (yes, yes, clockeeeet \ud83d\ude0d\ud83d\ude02). We can't wait to celebrate with the people who've watched this love story unfold.",
        image: storyChapter5,
        imageAlt: "Courage and Ife counting down to the wedding",
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
      "Hello! I'd like to get the wedding material (Cap / Gele) for Courage & Ife's wedding.",
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

  // Background soundtrack — a single, discreet, visitor-controlled toggle.
  // The URL is a direct, browser-accessible MP3 (HTTP 200, accepts byte ranges).
  music: {
    src: "https://store.cvaultx.com/uploads/music/2026/05/Dwin-feat-The-Stoic-Again-(CeeNaija.com).mp3",
    label: "Play wedding soundtrack",
    pauseLabel: "Pause wedding soundtrack",
    defaultVolume: 0.25,
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
    items: [
      { name: "Cap", price: "₦5,000" },
      { name: "Gele", price: "₦15,000" },
    ],
    paymentDeadline: "22nd November 2026",
    bankName: "GTBank",
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
    message: "With love, Courage & Ife.",
  },
};

export default weddingData;
