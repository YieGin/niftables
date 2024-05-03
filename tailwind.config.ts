import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1700px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(174.64deg, #3D6FFF 4.29%, #9123FF 95.05%)", // Custom gradient from Figma
      },
      fontFamily: {
        'satoshi-Bold': ['var(--font-satoshi-Bold)'],
        'satoshi-Regular': ['var(--font-satoshi-Regular)'],
        'satoshi-Medium': ['var(--font-satoshi-Medium)'],
        'monument': ['var(--font-monument)'],
      },
      mixBlendMode: { // Adding mix blend modes
        overlay: 'overlay',
      },
      rotate: { // Extend rotation utilities if needed
        '180': '180deg',
      }
    },
  },
  plugins: [],
};

export default config;
