/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "mio":"0 0 3px rgb(255,255,255)",
        "mio2":"0 0 1px #a1d4f0"
      },
      borderColor:{
        "res":"#eef9ff"
      },
      backgroundColor:{
        "miColor":"rgb(0,1,5)",
        "titulo":"rgba(130, 202, 141, 0.1)"
      }
    },
  },
  plugins: [],
}

