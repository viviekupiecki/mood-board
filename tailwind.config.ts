import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	fontFamily: {
		display: ['Oswald', 'sans-serif'],
		body: ['"Noto Sans"', 'serif'],
	},
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: 'true',
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
colors: {
  primary: {
    500: '#0D2C44',  // Dark Navy (original DEFAULT)
    400: '#154463',  // Slightly lighter shade for hover/focus states
    600: '#0A2237',  // Darker shade for active states
    foreground: '#F1F5F9',
  },
  secondary: {
    500: '#A8BFAE',  // Muted green (original DEFAULT)
    400: '#BACDBA',  // Lighter shade
    600: '#91A88F',  // Darker shade
    foreground: '#1F2A29',
  },
  accent: {
    500: '#e5e8f0',  // Light beige original
    400: '#f0f2f9',  // Lighter for backgrounds
    600: '#c1c6d1',  // Darker for borders or text
    foreground: '#1A3A4C',
  },
  background: '#F1F3F7',
  foreground: '#1A3A4C',
  border: '#4C5C68',
  ring: '#A8BFAE',
  muted: {
    500: '#3B4A55',
    400: '#526374',
    600: '#2a3943',
    foreground: '#D1D8D9',
  },
  destructive: {
    500: '#D14B5C',
    400: '#de6a72',
    600: '#a93b46',
    foreground: '#FFFFFF',
  },
  popover: {
    500: '#0D2C44',
    400: '#154463',
    600: '#0A2237',
    foreground: '#F1F5F9',
  },
  card: {
    500: '#e5e8f0',
    400: '#f0f2f9',
    600: '#c1c6d1',
    foreground: '#1A3A4C',
  },
  sidebar: {
    500: '#0D2C44',
    400: '#154463',
    600: '#0A2237',
    foreground: '#D1D8D9',
    primary: '#A8BFAE',
    'primary-foreground': '#1F2A29',
    accent: '#C5CBDD',
    'accent-foreground': '#0D2C44',
    border: '#4C5C68',
    ring: '#A8BFAE',
    hover: '#1A3A4C',
  },
},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

export default config
