import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#D6A9FD",
          200: "#D29EFF",
          300: "#C889FF",
          400: "#C078FF",
          500: "#BA6AFF",
          600: "#B35BFF",
          700: "#AC4DFF",
          800: "#A43DFF",
          900: "#9D2DFF"
        },
        primary: "#FFFFFF",
        secondary: "#3F3645",
        primaryFont : "#000000",
        secondaryFont: "#656565",
        border: "#DADADA",
        borderLight: "#ECECEC",
        borderDark: "#7D7D7D",
        opaqueLight:"rgba(183, 183, 183, 21%)",
        opaque: "rgba(183, 183, 183, 21%)",
      },
      borderRadius: { 
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
