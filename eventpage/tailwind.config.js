/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: {
          100: "#6685f7",
          200: "#415ed0",
        },
        white: "#fff",
        gray: {
          100: "#121212",
          200: "rgba(18, 18, 18, 0.44)",
        },
        silver: "#bbbcc0",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "36xl": "55px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "8xl": "27px",
      lgi: "19px",
      "45xl": "64px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
