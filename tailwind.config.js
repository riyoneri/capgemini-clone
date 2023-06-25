/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Ubuntu",
        "main-light": "Ubuntu-Light",
        "main-bold": "Ubuntu-Bold",
        phoenix: "Phoenix"
      },
      backgroundImage: {
        "blue-line": "url(/assets/images/xl-shape-and-blue-line-2.svg)",
        "construction-site": "url(../assets/images/Eramet_client_story_Dotcom-banner_2880x1800px.jpg)"
      },
      colors: {
        "main": "#15011d",
        "hover": "",
        "main-blue": "#0070ad"
      }
    },
  },
  plugins: [],
}

