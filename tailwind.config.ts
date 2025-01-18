import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{tsx,js}',
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      
      
      
      "lg" : "1240px",
      "md2": "1110px" ,
      "md": "991px",
      "sm": "767px",
      "xs2": "650px",
      "xs": "470px",
      "xxs": "320px",
      
    } ,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
