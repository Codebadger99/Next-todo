import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Light
      BrightBlue: "hsl(220, 98%, 61%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      LightGrayishBlue: "hsl(233, 11%, 84%)",
      DarkGrayishBlue: "hsl(236, 9%, 61%)",
      VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      // Dark

      VeryDarkBlue: "hsl(235, 21%, 11%)",
      VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      LightGrayishBlue1: "hsl(234, 39%, 85%)",
      LightGrayishBlue2: "hsl(236, 33%, 92%)", //Hover
      DarkGrayishblue: "hsl(234, 11%, 52%)",
      VeryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
      VeryDarkGrayishBlue2: "hsl(237, 14%, 26%)", //Hover

      CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
    },
    extend: {},
  },
  plugins: [],
};
export default config;
