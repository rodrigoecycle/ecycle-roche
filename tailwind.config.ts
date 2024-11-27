import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        screenLessTop: 'calc(100vh - calc(136px * 2))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      aspectRatio: {
        '0944/1': '0.944 / 1',
        '146/1': '1.46 / 1',
      },
      colors: {
        // background: 'hsl(var(--background))',
        // foreground: 'hsl(var(--foreground))',
        primary: '#3758F9',
        overlay: '#1C3FB7',
        dark: {
          '200': '#DFE4EA',
          '500': '#8899A8',
          '600': '#3758F9',
          '900': '#111928',
        },
        // card: {
        //   DEFAULT: 'hsl(var(--card))',
        //   foreground: 'hsl(var(--card-foreground))',
        // },
        // popover: {
        //   DEFAULT: 'hsl(var(--popover))',
        //   foreground: 'hsl(var(--popover-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))',
        // },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))',
        // },
        // destructive: {
        //   DEFAULT: 'hsl(var(--destructive))',
        //   foreground: 'hsl(var(--destructive-foreground))',
        // },
        // border: 'hsl(var(--border))',
        // input: 'hsl(var(--input))',
        // ring: 'hsl(var(--ring))',
        // chart: {
        //   '1': 'hsl(var(--chart-1))',
        //   '2': 'hsl(var(--chart-2))',
        //   '3': 'hsl(var(--chart-3))',
        //   '4': 'hsl(var(--chart-4))',
        //   '5': 'hsl(var(--chart-5))',
        // },
      },
      boxShadow: {
        card: '0 5px 12px 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        bag: 'url("/bag.svg")',
      },
      //   borderRadius: {
      //     lg: 'var(--radius)',
      //     md: 'calc(var(--radius) - 2px)',
      //     sm: 'calc(var(--radius) - 4px)',
      //   },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
