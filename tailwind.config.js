/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-brand': '#262626',
        'gray-brand': '#666666',
        'gray-brand-300': '#808080',
        'white-brand': '#F5F1EF',
        'blue-port': '#061492',
        error: '#E05252',
        validate: '#1FAD66',
      },
    },
  },
  plugins: [],
};
