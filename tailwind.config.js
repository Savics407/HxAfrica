/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      family: ["Poppins"],
      inter: ["Inter"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 16px 64px -48px rgba(31, 47, 70, 0.15)",
      },
      backdropBlur: {
        xs: "1px",
      },
      colors: {
        primary: "#EDFDFD",
        green: "#008E10",
        opacity: "#008e1191",
        border: "rgba(0, 142, 16, 0.46);",
        input: "#F9FFFF",
        ccc: "#cccccc",
        grey: "#828282",
        sec: "#252F40",
        dark: "#1E2335",
        banner: "#1E1E1E",
        red: "#FF4438",
        on: "#53F3C3",
        mainbg: "#F8F8F9",
        navbar: "#8E8E8E",
        "mobile-nav": "#343C44",
        "mobile-banner": "#8BFF98",
        dashbg: "#FCFCFD",
        endsin: "#C11574",
        welcome: "#FBFFFF",
        earnings: "#69A2F9",
        "light-blue": "#7281FF4F",
        token: "#7E7E99",
        darkButton: "#383B43",
        yellow: "#E59D19",
        media: "#58BD7D",
        stroke: "rgba(114, 129, 255, 0.15)",
        strokegrey: "rgba(0, 0, 0, 0.19);",
        secondary: "#555860",
        links: "#2360FF",
        "light-purple": "rgba(235, 189, 221, 0.44)",
        "light-blue": "rgba(1, 86, 255, 0.25)",
        "light-orange": "rgba(255, 184, 0, 0.22)",
        "sky-blue": "rgba(134, 223, 247, 0.4)",
        mainsec: "rgba(190, 190, 255, 0.15)",
        pink: "#FF62A5",
        grayy: "#686868",
        darkgray: "#263238",
        join: "#4B4B4B",
        footer: "#777E90",
        neutral: "#23262F",
        overlay: "rgba(0, 0, 0, 0.3)",
        modal: "#342D6E",
        strek: "#7281FF26",
        tokentext: "#353945",
        payment: "#777E91",
        vestabs: "#7D8698",
        vestabsborder: "#C6C6C6",
        more: "#E6E8EC",
        head: "#979797",
        statustext: "#667085",
        status: "#F8F8F8",
        statusborder: "#ECF3FC",
        pendingtext: "#FFA500",
        pending: "#fff8eb",
        change: "#0177FB",
        blue: "#3772FF",
        "border-gray": "rgba(114, 129, 255, 0.1)",
        total: "#F1F4F7",
      },
      fontSize: {
        tiny: "10px",
        xxm: "8px",
        "4l": "28px",
      },
      width: {
        128: "452px",
        "2/6": "32%",
        "6x": "13%",
        "7x": "130px",
        per: "48%",
      },
      height: {
        128: "465px",
        "7x": "465px",
        100: "725px",
      },
      // boxShadow: {
      //   '3xl': '0px 16px 64px -48px rgba(31, 47, 70, 0.15)',
      // },
    },
  },
  plugins: [],
};
