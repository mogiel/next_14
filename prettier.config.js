/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: 'all',
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
};