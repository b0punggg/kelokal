/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        daysone: ['"Days One"', "system-ui", "sans-serif"],
      },
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
        introRise: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(14px)' },
          '70%': { opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)' },
        },
        labPulse: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '15%': { opacity: '1', transform: 'translateY(0px)' },
          '70%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(-4px)' },
        },
        logoBlink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.25' },
          '100%': { opacity: '1' },
        },
        bubbleFloat: {
          '0%': { opacity: '0', transform: 'translateY(6px) scale(0.7)' },
          '20%': { opacity: '0.9' },
          '100%': { opacity: '0', transform: 'translateY(-18px) scale(1.15)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueeReverse: 'marqueeReverse 20s linear infinite',
        bounceIn: 'bounceIn 500ms cubic-bezier(0.2, 0.9, 0.2, 1) both',
        bounceOut: 'bounceOut 380ms cubic-bezier(0.4, 0, 0.2, 1) both',
        introRise: 'introRise 1400ms cubic-bezier(0.22, 1, 0.36, 1) both',
        labPulse: 'labPulse 2400ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
        logoBlink: 'logoBlink 1400ms ease-in-out infinite',
        bubbleFloat: 'bubbleFloat 1200ms ease-out infinite',
      },
    },
  },
  plugins: [],
}

