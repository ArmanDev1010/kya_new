/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F36967",
        secondary: "#1FBDAF",
        thirdly: "#FED501",
      },
    },
    screens: {
      _1920: "1920px",
      _1750: "1750px",
      _1600: "1600px",
      _1440: "1440px",
      _1280: "1280px",
      _1080: "1080px",
      _900: "900px",
      _700: "700px",
      _550: "550px",
      _400: "400px",
      _360: "360px",
    },
  },
  plugins: [],
};
