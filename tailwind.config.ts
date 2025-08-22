import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
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
					DEFAULT: '#0D2C44', // Dark Navy
					foreground: '#F1F5F9' // Lighter but not too light for contrast
				},
				secondary: {
					DEFAULT: '#A8BFAE', // Muted green
					foreground: '#1F2A29' // Keeps dark green for good contrast
				},
				accent: {
					DEFAULT: '#e5e8f0', // Light beige
					foreground: '#1A3A4C' // A step darker than navy for crisper text
				},
				background: '#F1F3F7', // Fixed: added missing #
				foreground: '#1A3A4C', // Dark Navy text (good on light backgrounds)
				border: '#4C5C68', // Muted border
				ring: '#A8BFAE', // Muted green ring for focus states
				muted: {
					DEFAULT: '#3B4A55', // Muted navy
					foreground: '#D1D8D9' // Light gray text (not pure white)
				},
				destructive: {
					DEFAULT: '#D14B5C', // Soft red
					foreground: '#FFFFFF' // Ensure high contrast
				},
				popover: {
					DEFAULT: '#0D2C44', // Match primary
					foreground: '#F1F5F9' // Consistent with other text
				},
				card: {
					DEFAULT: '#e5e8f0', // Light gray-blue
					foreground: '#1A3A4C' // Slightly brighter navy
				},
				sidebar: {
					DEFAULT: '#0D2C44',
					foreground: '#D1D8D9',
					primary: '#A8BFAE',
					'primary-foreground': '#1F2A29',
					accent: '#C5CBDD',
					'accent-foreground': '#0D2C44',
					border: '#4C5C68',
					ring: '#A8BFAE',
					hover: '#1A3A4C' // Slightly lighter navy for hover contrast
				}
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
