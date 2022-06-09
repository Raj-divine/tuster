module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      dancingScript: ["Dancing Script", "cursive"],
    },
    extend: {
      colors: {
        teal: {
          50: "#E6FCF5",
          100: "#C3FAE8",
          200: "#96F2D7",
          300: "#63E6BE",
          400: "#38D9A9",
          500: "#20C997",
          600: "#12B886",
          700: "#0CA678",
          800: "#099268",
          900: "#087F5B",
        },
        dark: {
          50: "#C1C2C5",
          100: "#A6A7AB",
          200: "#909296",
          300: "#5C5F66",
          400: "#373A40",
          500: "#2C2E33",
          600: "#25262B",
          700: "#1A1B1E",
          800: "#141517",
          900: "#101113",
        },
      },
      borderRadius: {
        blob: "36% 64% 57% 43% / 72% 43% 57% 28% ",
      },
    },
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
