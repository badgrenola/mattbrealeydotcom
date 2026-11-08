export default {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif']
			},
			// Semantic colours, backed by the CSS variables in src/app.postcss
			colors: {
				page: 'var(--bg)',
				ink: 'var(--text)',
				'ink-soft': 'var(--text-soft)',
				icon: 'var(--icon)',
				muted: 'var(--muted)',
				'muted-strong': 'var(--muted-strong)',
				brand: 'var(--pink)',
				link: 'var(--pink-soft)',
				accent: 'var(--accent)',
				active: 'var(--active)',
				line: 'var(--border)',
				code: 'var(--code)',
				'code-block': 'var(--code-block)'
			},
			// Replaces Tailwind's default border colour (gray-200)
			borderColor: {
				DEFAULT: 'var(--rule)'
			}
		}
	},

	plugins: []
};
