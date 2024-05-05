import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#3D8BFF',
      secondary: '#AB23FF',
      primaryText: '#fff',
      ...colors,
    },
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
        'video-overlay-hero': 'linear-gradient(174.64deg, #000000 4.29%, #3d8bff 47.39%, #ab23ff 95.05%)',
        'video-overlay': 'linear-gradient(174.64deg, rgba(61, 139, 255, 0.44) 4.29%, #ab23ff 95.71%)',
        'video-overlay-Innovation-video-bottom': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
      },
      fontFamily: {
        'satoshi-Bold': ['var(--font-satoshi-Bold)'],
        'satoshi-Regular': ['var(--font-satoshi-Regular)'],
        'satoshi-Medium': ['var(--font-satoshi-Medium)'],
        'monument': ['var(--font-monument)'],
      }
    },
  },
  plugins: [],
};

export default config;
