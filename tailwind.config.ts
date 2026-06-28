import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8D5A3",
          dark: "#9A7B2E",
          muted: "rgba(201,168,76,0.15)",
        },
        ink: {
          950: "#0C0C0C",
          900: "#111111",
          800: "#161616",
          700: "#1A1A1A",
          600: "#222222",
        },
        cream: "#F7F3ED",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
