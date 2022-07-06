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
        mainbg: "#F8F8F9", 
        navbar: "#8E8E8E",
        dashbg: "#FCFCFD", 
        welcome: "#FBFFFF",
        earnings: "#69A2F9", 
        'light-blue': "#7281FF4F", 
        token: '#7E7E99', 
        media: '#58BD7D',
        stroke: "rgba(114, 129, 255, 0.15)", 
        secondary:"#555860", 
        links: "#2360FF", 
        'light-purple': 'rgba(235, 189, 221, 0.44)', 
        'light-blue': 'rgba(1, 86, 255, 0.25)',
        'light-orange': 'rgba(255, 184, 0, 0.22)',  
        mainsec:'rgba(190, 190, 255, 0.15)',
        pink: "#FF62A5", 
        grayy:"#686868",
        darkgray: "#263238"
      },
      fontSize: {
      'tiny': '10px',
      'xxm': '8px'
      },
    },
  },
  plugins: [],
}