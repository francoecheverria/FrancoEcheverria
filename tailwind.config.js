// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#22D3EE', // Azul claro
          secondary: '#D946EF', // Rosa
          background: '#1E1B47', // Morado oscuro (aside)
          dark: '#12103B', // Fondo principal
          highlight: '#29256A', // Tarjetas
          textMain: '#FFD700', // Amarillo (equivalente a text-yellow-300)
          textSecondary: '#B8B8B8', // Gris claro
        },
      },
    },
    plugins: [],
  };
  