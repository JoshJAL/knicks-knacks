import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        celadon: '#b0f2b4',
        celeste: '#BAF2E9',
        'colombia-blue': '#BAD7F2',
        'orchid-pink': '#F2BAC9',
        'dutch-white': '#F2E2BA'
      }
    }
  },
  plugins: []
};
export default config;
