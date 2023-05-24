/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      default: '#202020',
      primary: '#80cdec',
      secondary: '#004b76',
      success: '#005c45',
      warning: '#c44931',
    },
    extend: {
      colors: {
        'dark-brand': '#262626',
        'gray-brand': '#666666',
        'gray-brand-300': '#808080',
        'white-brand': '#F5F1EF',
      },
    },
  },
  plugins: [],
};
