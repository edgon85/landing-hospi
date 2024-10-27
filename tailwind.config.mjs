/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'picton-blue': {
          50: '#f0f9ff',
          100: '#e1f2fd',
          200: '#bbe6fc',
          300: '#80d2f9',
          400: '#38baf4',
          500: '#12a3e5',
          600: '#0683c3',
          700: '#06689e',
          800: '#095883',
          900: '#0e496c',
          950: '#092f48',
        },
      },
    },
  },
  plugins: [],
};
