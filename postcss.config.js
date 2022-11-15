const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  plugins: [tailwindcss(tailwindConfig), autoprefixer],
};
