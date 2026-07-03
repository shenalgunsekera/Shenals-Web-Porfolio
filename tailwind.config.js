/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FFFFFF',          // page background
        chalk: '#101016',        // primary text (cool near-black)
        line: '#E9E9F1',         // hairline borders / dividers
        surface: '#F7F7FB',      // soft cell background
        'mute-1': '#4E4E60',     // strong secondary text
        'mute-2': '#6E6E82',     // secondary text
        'mute-3': '#9A9AAE',     // faint labels
        brand: {
          DEFAULT: '#4F46E5',
          light: '#818CF8',
          dark: '#3730A3',
          50: '#EEF2FF',
          100: '#E0E7FF',
          600: '#4338CA',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #818CF8 0%, #4F46E5 50%, #7C3AED 100%)',
        'brand-radial': 'radial-gradient(1100px 520px at 78% -10%, rgba(79,70,229,0.10), transparent 60%)',
      },
      boxShadow: {
        brand: '0 18px 50px -12px rgba(79,70,229,0.40)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
