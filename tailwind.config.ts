module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        halant: ["Halant", "sans-serif"],
        hammersmith: ["Hammersmith One", "sans-serif"],
        hanuman: ["Hanuman", "sans-serif"],
        jomolhari: ["Jomolhari", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        'open-sans': ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.8s ease-out",
      },
    },
  },
};
