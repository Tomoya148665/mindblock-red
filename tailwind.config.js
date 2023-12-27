/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
        "1/3": "30%",
      },
      backgroundPosition: {
        "center-top": "50% 0",
      },
      colors: {
        lightskyblue: "#83ccff",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkslategray: "#4b4b4b",
      },
      spacing: {},
      fontFamily: {
        "a-p-otf-suiryuneoroman-stdn": "'A P-OTF SuiryuNeoroman StdN'",
        "hiragino-kaku-gothic-stdn": "'Hiragino Kaku Gothic StdN'",
        "pistilli-pro": "'Pistilli Pro'",
        "ryumin-bold": "'RyuminPro Bold'",
        "ryumin-exbold": "'RyuminPro ExBold'",
        "ryumin-exheavy": "'RyuminPro Heavy'",
        "ryumin-light": "'RyuminPro Light'",
        "ryumin-medium": "'RyuminPro Medium'",
        "ryumin-regular": "'RyuminPro Regular'",
        "ryumin-ultra": "'RyuminPro Ultra'",
      },
    },
    fontSize: {
      xl: "20px",
      "5xs": "8px",
      "3xs": "10px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: "1025px",
      md: "960px",
      sm: "600px",
      xs: "500px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
