import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'icons-color': '#EBD96B' // Custom color for icons
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        slider: 'slider 10s linear infinite' // Smooth animation for slider
      },
      backgroundImage: {
        bannerImg: "url('/yellowbackground.png')"
      }
    }
  },
  plugins: []
}

export default config
