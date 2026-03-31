/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.92) translateY(14px)' },
          '60%': { transform: 'scale(1.06) translateY(-6px)' },
          '85%': { transform: 'scale(0.98) translateY(2px)' },
          '100%': { transform: 'scale(1) translateY(0px)' },
        },
        bounceOut: {
          '0%': { transform: 'scale(1) translateY(0px)' },
          '30%': { transform: 'scale(1.04) translateY(-4px)' },
          '100%': { transform: 'scale(0.92) translateY(14px)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueeReverse: 'marqueeReverse 20s linear infinite',
        bounceIn: 'bounceIn 500ms cubic-bezier(0.2, 0.9, 0.2, 1) both',
        bounceOut: 'bounceOut 380ms cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}

