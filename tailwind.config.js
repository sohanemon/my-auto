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
        themeBg: '#F2F3F6',
        themeBlack: '#272A37',
        themeRed: '#FD4100',
        themeFuschia: '#FF3B30',
        themeViolet: '#4A6CFA',
        themeYellow: '#FEC900',
        themeAqua: '#59D8C9',
        themeGreen: '#1BBA6B',
        themeBlue: '#3378E1',
        themeLightBlue: '#2680EB',
      },
    },
  },
  plugins: [],
};
