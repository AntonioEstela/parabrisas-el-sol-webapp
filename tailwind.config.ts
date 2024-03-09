import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'own-yellow': '#FDC826',
        'blue-secondary': '#02B3E8',
        'blue-secondary-hover': '#0189B2',
      },
      width: {
        'width-32rem': '32rem',
      },
      height: {
        'height-32rem': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
