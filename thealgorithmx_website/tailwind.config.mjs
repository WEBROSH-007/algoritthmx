/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2560px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        helveticaneue: ['Helvetica Neue', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        glock: ['Glock', 'sans-serif'], 
      },
      
      colors: {
        'semi-white': 'rgba(255, 255, 255, 0.5)',
        'semii-white': 'rgba(255, 255, 255, 0.6)',
        'nav-bar-text':'rgba(255, 255, 255, 0.8)',
        'dark': '#0f0f0f',
        
      },
    },
  },
  plugins: [],
};
