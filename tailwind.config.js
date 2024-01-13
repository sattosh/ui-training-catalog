/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#5bcdc1',
          50: '#eef5f4',
          100: '#ccf0f3',
          200: '#94e6e3',
          300: '#5bcdc1',
          400: '#22af99',
          500: '#189472',
          600: '#167e5a',
          700: '#156147',
          800: '#114236',
          900: '#0c2928',
        },
        secondary: {
          default: '#bbb0e9',
          50: '#f9fafa',
          100: '#edeffa',
          200: '#dbd6f6',
          300: '#bbb0e9',
          400: '#a087d8',
          500: '#8763cb',
          600: '#6f47b5',
          700: '#543590',
          800: '#3a2565',
          900: '#21183c',
        },
        error: {
          default: '#f56565',
          dark: '#f56565',
          light: '#f56565',
        },
        warning: {
          default: '#f9a826',
          dark: '#f9a826',
          light: '#f9a826',
        },
        success: {
          default: '#38a169',
          dark: '#38a169',
          light: '#38a169',
        },
      },
    },
  },
  plugins: [],
};
