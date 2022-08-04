module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      // => @media (min-width: 480px)

      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 480px)

        sm: "640px",
        // => @media (min-width: 640px)

        md: "768px",
        // => @media (min-width: 768px)

        lg: "1024px",
        // => @media (min-width: 1024px)

        xl: "1280px",
        // => @media (min-width: 1280px)

        "2xl": "1536px",
        // => @media (min-width: 1536px)
      },
      height: {
        128: "49.5rem",
      },
      width: {
        '66': '16.6rem',
        '42': '10.6rem',
        '120': '32.6rem',
      }
    },
  },
  plugins: [],
};
