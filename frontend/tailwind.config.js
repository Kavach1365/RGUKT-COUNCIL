/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cblue: '#5ea0dc', 
        cgreen: '#39461c', // Example custom color
        cpeach3: '#beb38b',
        olive: '#4a5629',
        cream: '#CAC1B0',
        maroon: '#7F3430',
        DustyRose: '#D3B1B0',
        darkBlue: '#65afff',
        cream2: '#f4efe6',
      },
    },
  },
  plugins: [],
};
