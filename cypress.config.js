const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		viewportWidth: 640,
		viewportHeight: 1136,
		video: false,
		experimentalWebKitSupport: true,
	},
})
