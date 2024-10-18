module.exports = {
    theme: {
      extend: {
        keyframes: {
          moveAround: {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '25%': { transform: 'translate(100px, 0)' },
            '50%': { transform: 'translate(100px, 100px)' },
            '75%': { transform: 'translate(0, 100px)' },
          },
        },
        animation: {
          moveAround: 'moveAround 3s infinite',
        },
      }
    }
  }