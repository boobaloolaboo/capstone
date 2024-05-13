import daisyui from  'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["lofi", "forest", "cupcake", "lemonade", "valentine", "retro", "synthwave"],
  },

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
