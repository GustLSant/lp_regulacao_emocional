/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso varre todos os arquivos na pasta src
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
      colors: {
        'light-blue': '#344851',
        'dark-blue': '#1D292F',
        'dark-green': '#3E4B3F',
        'light-green': '#9EA38B',
        'orange': '#B8643E',
        'dark-beige': '#E0C9B1',
        'light-beige': '#F3EADE',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'googleflex': ['"Google Sans Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

