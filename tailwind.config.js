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
        'cover-image': "url('/Users/varshini/Documents/ClientProjects/jothienterpriseProj/jothi-enterprise/src/assets/coverPic.jpg')", 
      },
    },
  },
  plugins: [],
};
