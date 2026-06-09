import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rice: {
          cream: "#fbf6e9",
          paper: "#f5efe1",
          linen: "#e9ddc8",
          charcoal: "#25231f",
          muted: "#6f6a5d",
          olive: "#2f512f",
          leaf: "#5e7a47",
          gold: "#b59b62",
          straw: "#e6d6a8"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(61, 55, 43, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      }
    }
  },
  plugins: []
};

export default config;
