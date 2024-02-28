

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#121212', // Dark background for the entire SPA
        'light-text': '#ffffff', // White text color for contrast
        //'hover-light-bg': '#f0f0f0', // Light grey for hover state
        //'translucent-white': 'rgba(255, 255, 255, 0.1)', // Translucent white for frosted glass effect
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backdropFilter: { // To enable backdrop filter utilities if not already present
        'none': 'none',
        'blur': 'blur(10px)',
      },
      borderRadius: {
        'xl': '10px',
      },
      spacing: {
        '18': '4.5rem', // Custom spacing if needed
      },
      // Add other theme extensions here
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // if you use forms and want to apply Tailwind styles to them
    require('@tailwindcss/typography'), // if you want to use the typography plugin for prose content
    // Add other plugins here
    
  ],
};
export default config;

