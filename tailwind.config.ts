import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        brand: {
          300: "#B6EB47",
          600: "#013216",
          1000: "#101703",
        },
        grey: {
          500: "#809388",
          200: "#BFC9C3",
          100: "#D9DFDB",
          50: "#EAECF0",
          25: "#CED4DA",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        "2rem": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
