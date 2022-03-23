module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#009000',
        'main-gray': '#6b7280',
      },
      keyframes: {
        showElement: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0'
          },
          '100': {
            opacity: '10'
          }
        }
      },
    },
  },
  plugins: [],
}
