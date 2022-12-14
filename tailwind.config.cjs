/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      
      backgroundImage: {
        fundo: "url('/fundo.png')",
        'nlw-gradiante': 'linear-gradient(86deg, #9572FC 20.08%, #43E7AD 45.94%, #E1D55D 85.57%)',
        'games-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
