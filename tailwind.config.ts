import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["'Caveat'", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
