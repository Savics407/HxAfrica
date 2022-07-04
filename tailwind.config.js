/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald',],
      'body': ['"Open Sans"'],
      'family': ['Poppins'],
     },
    extend: {
      colors: {
        primary: "#EDFDFD",
        green: "#008E10",
        border: "rgba(0, 142, 16, 0.46);",
        input : "#F9FFFF",
        ccc: "#cccccc",
        grey : '#828282',
        sec :'#252F40',
        dark: '#1E2335',
        red: '#FF4438',
        on: "#53F3C3",
        mainbg: "#F8F8F9"
      },
    },
  },
  plugins: [],
}