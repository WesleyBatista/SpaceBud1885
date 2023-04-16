module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	theme: {
		borderRadius: {
			DEFAULT: '4px'
		},
		container: {
			center: true
		}
	}
};
