import type { Config } from '@react-router/dev/config';

export default {
	// Config options...
	// Disable SSR for static export to GitHub Pages
	ssr: false,
	// Set base path for GitHub Pages
	basename: '/clock-app/',
} satisfies Config;
