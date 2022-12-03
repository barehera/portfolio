/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#01080e",
        "primary-light-blue": "#011627",
        "primary-dark-blue": "#011221",
        "primary-border": "#1E2D3D",
        "secondary-gray": "#607B96",
        "secondary-green": "#3C9D93",
        "secondary-blue": "#4D5BCE",
        "accent-orange": "#FEA55F",
        "accent-green": "#43D9AD",
        "accent-red": "#E99287",
        "accent-purple": "#C98BDF",
      },
      fontSize: {
        code: "14px",
        lables: "16px",
        body: "18px",
        subheadline: "32px",
        headline: "62px",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "pulse-slow": "pulse 10s linear infinite",
      },
    },
  },
  plugins: [],
};
