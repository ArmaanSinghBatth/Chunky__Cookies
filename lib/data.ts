export const WA_NUMBER = "9988630062"; // Replace with your WhatsApp number

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink("Hey Chunky Cookies! I'd like to place an order 🍪");

export interface Cookie {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  bgFrom: string;
  bgTo: string;
  badge?: string;
  image?: string;
  category: "classic" | "fruity" | "nutty" | "special";
}

export const COOKIES: Cookie[] = [
  {
    id: "choco-chunk",
    name: "Classic Choco Chunk",
    description: "Buttery base loaded with Belgian dark chocolate chunks. Crispy edges, gooey centre.",
    price: 100,
    image: "/images/classic-choco-chunkk.png",
    emoji: "🍪",
    bgFrom: "#f5e6c8",
    bgTo: "#e8d0a0",
    badge: "🔥 #1",
    category: "classic",
  },
  {
    id: "cookies-and-cream",
    name: "Cookies and Cream",
    description: "Nutty brown butter with pure vanilla extract. Simple, perfect, and incredibly satisfying.",
    price: 110,
    image: "/images/cookies-and-cream.png",
    emoji: "🍪",
    bgFrom: "#fff5e6",
    bgTo: "#f5deb3",
    category: "classic",
  },
  {
    id: "double-dark",
    name: "Double Dark",
    description: "Rich dark chocolate cookie with a gooey centre and crispy edges.",
    price: 110,
    image: "/images/double-dark.png",
    emoji: "🍫",
    bgFrom: "#d4c5a9",
    bgTo: "#ffb085",
    badge: "New ✨",
    category: "classic",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Moist red velvet cookie with a cream cheese frosting. A classic with a twist.",
    price: 110,
    image: "/images/red-velvet.png",
    emoji: "❤️",
    bgFrom: "#ff6b6b",
    bgTo: "#fcb69f",
    category: "special",
  },
  {
    id: "nutella",
    name: "Nutella",
    description: "Thick, chewy Nutella cookies with a sprinkle of sea salt. Absolutely addictive.",
    price: 150,
    image: "/images/nutella.png",
    emoji: "🥜",
    bgFrom: "#e8d5c0",
    bgTo: "#c4a882",
    category: "nutty",
  },
  {
    id: "biscoff",
    name: "Biscoff",
    description: "Thick, chewy Biscoff cookies with a sprinkle of sea salt. Absolutely addictive.",
    price: 150,
    image: "/images/biscoff.png",
    emoji: "🌰",
    bgFrom: "#e8d5c0",
    bgTo: "#a08060",
    category: "classic",
  },
  // {
  //   id: "birthday-confetti",
  //   name: "Birthday Confetti",
  //   description: "Funfetti sugar cookie with rainbow sprinkles and vanilla frosting. Celebrate every day!",
  //   price: 80,
  //   image: "/images/birthday-confetti.jpg",
  //   emoji: "🎂",
  //   bgFrom: "#e8c8e8",
  //   bgTo: "#c4a0c4",
  //   badge: "Limited 🎊",
  //   category: "special",
  // },
  {
    id: "chunky-cookie-tin",
    name: "Chunky Cookie Tin",
    description: "A delightful assortment of our most popular cookies, perfect for sharing.",
    price: 200,
    image: "/images/cookie-tin.png",
    emoji: "🍪",
    bgFrom: "#c8e8d4",
    bgTo: "#80c4a0",
    badge: "Limited 🎊",
    // badge: "Vegan 🌱",
    category: "special",
  },
  {
    id: "red-velvet-cream-cheese",
    name: "Red Velvet Cream Cheese",
    description: "Moist red velvet cookie with a cream cheese frosting. A classic with a twist.",
    price: 150,
    image: "/images/red-velvet-cream-cheese.png",
    emoji: "❤️",
    bgFrom: "#c8e8d4",
    bgTo: "#80c4a0",
    badge: "Limited 🎊",
    // badge: "Vegan 🌱",
    category: "special",
  },
];
