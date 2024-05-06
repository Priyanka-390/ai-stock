/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': '"Open Sans", sans-serif',
        'roboto':'"Roboto", sans-serif'
      },
      backgroundImage: {
        'rightlinegradient': 'linear-gradient(91.31deg, #00FFE1 0.25%, #7E34DC 28.47%, #AEAEAE 50.45%, rgba(110, 93, 246, 0) 95.53%)',
         'leftlinegradient':'linear-gradient(91.31deg, #00FFE1 0.25%, #7E34DC 28.47%, #AEAEAE 50.45%, rgba(110, 93, 246, 0) 95.53%)',
          'footerline': 'linear-gradient(91.34deg, rgba(0, 255, 225, 0) 0%, rgba(0, 255, 225, 0.35) 9.95%, #00FFE1 48.76%, rgba(0, 255, 225, 0.35) 87.72%, rgba(0, 255, 225, 0) 97.72%)'

      }
    },
  },
  plugins: [],
}

