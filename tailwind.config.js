module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
