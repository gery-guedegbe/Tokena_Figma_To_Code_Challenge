/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fontJetBrainsMono: "JetBrains Mono, monospace",
      },
      colors: {
        "tokena-dark": "#1D1D1D",
        "tokena-gray": "#D1D5DB",
        "tokena-blue": "#006EFF",
        "tokena-light-gray": "#F3F4F6",
        "tokena-dark-gray": "#6B7280",
        "tokena-red": "#CB0101",
        "tokena-green": "#01B130",
        "tokena-dark-blue-1": "#171923",
        "tokena-dark-blue-2": "#292C3B",
      },
    },
  },
  plugins: [],
};
