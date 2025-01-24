import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "var(--primary-color)",    // Teal
        secondary: "var(--secondary-color)", // Mint Green
        accent: "var(--accent-color)",      // Yellow
        background: "var(--background-color)",  // White
        darkblue: "var(--text-color)",        // Dark Blue
      },
    },
  },
  plugins: [],
} satisfies Config;
