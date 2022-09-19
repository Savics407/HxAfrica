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
      skew: {
        20: "50deg",
      },
      boxShadow: {
        "3xl": "0 16px 64px -48px rgba(31, 47, 70, 0.15)",
      },
      backdropBlur: {
        xs: "1px",
      },
      colors: {
        primary: "#EDFDFD",
        timeStamp: "rgba(15, 15, 15, 0.5)",
        time: "rgba(255, 255, 255, 0.5)",
        arrow: "#5C6A77",
        you: "rgba(15, 15, 15, 0.75)",
        up: "#F79009",
        ongoing: "#FFFAEB",
        mine: "#EAF0FF",
        inactive: "#B54708",
        green: "#008E10",
        smiles: "#9BABC9",
        opacity: "#008e1191",
        border: "#8acb91",
        dashed: "#8C9196",
        file: "#F6F6F7",
        relisted: "#B42318",
        relist: "#FEF3F2",
        input: "#F9FFFF",
        ccc: "#cccccc",
        sort: "#8C8C8C",
        product: "#6D7175",
        grey: "#828282",
        sec: "#252F40",
        dark: "#1E2335",
        approved: "#F2F4F7",
        appText: "#344054",
        banner: "#1E1E1E",
        red: "#FF4438",
        on: "#53F3C3",
        page: "#EEF2F8",
        mainbg: "#F8F8F9",
        back: "#919EAB",
        chat: "#0F0F0F",
        backarrow: "#C4CDD5",
        navbar: "#8E8E8E",
        bar: "#FCFAFC",
        "mobile-nav": "#343C44",
        "mobile-banner": "#8BFF98",
        dashbg: "#FCFCFD",
        sidenav: "#CCE8CF",
        endsin: "#C01048",
        rose: "#F63D68",
        welcome: "#FBFFFF",
        earnings: "#69A2F9",
        "light-blue": "#7281FF4F",
        token: "#7E7E99",
        darkButton: "#383B43",
        yellow: "#E59D19",
        media: "#58BD7D",
        stroke: "rgba(114, 129, 255, 0.15)",
        svg: "#5E636D",
        card: "#4A4A4E",
        push: "#001C03",
        strokegrey: "rgba(0, 0, 0, 0.19);",
        secondary: "#555860",
        links: "#2360FF",
        "light-purple": "rgba(235, 189, 221, 0.44)",
        "light-blue": "rgba(1, 86, 255, 0.25)",
        "light-orange": "rgba(255, 184, 0, 0.22)",
        "sky-blue": "rgba(134, 223, 247, 0.4)",
        mainsec: "rgba(190, 190, 255, 0.15)",
        pink: "#FF62A5",
        pinkShade: "#FF7171",
        sideText: "#5E636D",
        grayy: "#686868",
        darkgray: "#263238",
        join: "#4B4B4B",
        footer: "#777E90",
        currency: "#72777F",
        bgGreen: "#ECFDF3",
        gren: "027A48",
        neutral: "#23262F",
        overlay: "rgba(0, 0, 0, 0.3)",
        modal: "#342D6E",
        strek: "#7281FF26",
        tokentext: "#353945",
        payment: "#777E91",
        vestabs: "#7D8698",
        title: "#28261E",
        vestabsborder: "#C6C6C6",
        more: "#E6E8EC",
        head: "#979797",
        listed: "#1F242D",
        statustext: "#667085",
        slight: "#039855",
        deep: "#101828",
        status: "#F8F8F8",
        table: "#F9FAFB",
        bids: " #F8F9FC",
        bidsText: "#363F72",
        statusborder: "#ECF3FC",
        pendingtext: "#FFA500",
        pending: "#fff8eb",
        change: "#0177FB",
        angle: "#505051",
        darker: "#111114",
        blue: "#3772FF",
        "border-gray": "rgba(114, 129, 255, 0.1)",
        total: "#F1F4F7",
        letsee: "#FFF1F3",
      },
      fontSize: {
        tiny: "10px",
        xxm: "8px",
        "4l": "26px",
      },
      width: {
        128: "452px",
        100: "700px",
        411: "411px",
        "2/6": "32%",
        "6x": "13%",
        "7x": "130px",
        per: "48%",
        53: "53%",
        27: "25.5%",
      },
      height: {
        128: "465px",
        "7x": "465px",
        100: "725px",
        l: "880px",
        p: "75vh",
        90: "350px",
        side: "650px",
      },
      // boxShadow: {
      //   '3xl': '0px 16px 64px -48px rgba(31, 47, 70, 0.15)',
      // },
    },
  },
  plugins: [],
};
