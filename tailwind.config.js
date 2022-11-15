module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        'yellow-grad-1': '#FFCE59',
        'yellow-grad-2': '#FFCE59',
        'blue-grad-1': '#7B61FF',
        'blue-grad-2': '#0A84FF',
        'minutes-grad-1': '#5856D6',
        'minutes-grad-2': '#0E0C8B',
        'hours-grad-1': '#FF2D55',
        'hours-grad-2': '#960000',
        'days-grad-1': '#007AFF',
        'days-grad-2': '#280EC7',
        'mounths-grad-1': '#FF3B30',
        'mounths-grad-2': '#A80000',
        'purple-grad-1': '#AF52DE',
        'purple-grad-2': '#520081',
      }),
      colors: {
        'button-blue-color': '#0A84FF',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
