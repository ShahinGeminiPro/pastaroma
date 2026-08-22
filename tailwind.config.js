/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0F0F10',
        'dark-surface': '#18181B',
        'dark-card': '#1F1F23',
        'dark-card-hover': '#27272A',
        'cream-bg': '#F5EFEB',
        'cream-surface': '#EFE8DF',
        'primary': '#E05A38',
        'primary-hover': '#D9532F',
        'light-text': '#FAFAFA',
        'muted-text': '#A1A1AA',
        'dark-text': '#1C1917',
      }
    },
  },
  plugins: [],
}
