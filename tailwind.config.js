module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '475px',
      },
      maxWidth: {
        96: '24rem',
      },
      minHeight: {
        48: '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
