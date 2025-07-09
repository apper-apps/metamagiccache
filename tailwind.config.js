/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        secondary: "#4895ef",
        accent: "#7209b7",
        success: "#06d6a0",
        warning: "#f77f00",
        error: "#d62828",
        info: "#4895ef",
        surface: "#ffffff",
        background: "#f8f9fa",
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4361ee 0%, #4895ef 100%)',
        'gradient-magical': 'linear-gradient(135deg, #4361ee 0%, #7209b7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #4361ee 0%, #4895ef 50%, #7209b7 100%)',
      },
      animation: {
        'bounce-subtle': 'bounce 1s ease-in-out infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}