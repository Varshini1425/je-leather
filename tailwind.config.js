// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          light: '#3a3a3a',
          DEFAULT: '#2c2c2c',
          dark: '#1a1a1a',
        },
        metallicGold: '#D2B594',
        darkGreen: '#5A7466',
      },
      backgroundImage: {
       'cover': "url('./src/assets/coverPic.jpg')",
      },
    },
  },
  plugins: [],
};
