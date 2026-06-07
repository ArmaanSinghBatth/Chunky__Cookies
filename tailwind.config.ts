import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EE",
        "brown-dark": "#2C1A0E",
        "brown-mid": "#6B3A1F",
        "brown-light": "#C47C3A",
        caramel: "#E8A44A",
        choc: "#4A2512",
        blush: "#F5DEB3",
        "wa-green": "#25D366",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
