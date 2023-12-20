/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#85BBF3',
        'light-blue': '#E9F3F4',
      },
      boxShadow: {
        'custom-white': '1.5px 1.5px 3px 0px rgba(174, 174, 192, 0.40), -1px -1px 3px 0px #FFF',
      },
    },
  },
  plugins: [],
}
