module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'vue-nuxt',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	css: [
		'~/css/main.css'
	],
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend(config, { isDev, isClient }) {
			// ...
			config.module.rules.push({
				enforce: 'pre',
				test: /\.scss$/,
				loader: 'vue-style-loader!css-loader!sass-loader',
				exclude: /(node_modules)/
			})
		}
	}
}
