import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 4rem rgba(255, 255, 255, 0.2)',
      },
      colors: {
        secondary: 'var(--color-secondary)',
        text: 'var(--text-color)',
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(270deg, #4f56ff, #ff4980)',
      },
    },
  },
  plugins: [],
};

export default config;