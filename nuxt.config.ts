export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
	],
	css: [ './assets/css/main.css' ],
	ssr: true,
	nitro: {
		prerender: {
			routes: ['/']
		}
	},
	app: {
		head: {
			title: 'Regulação Emocional - Curso Completo',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Descrição geral do meu app' }
			],
		}
	}
})