const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
	expose: {
		apiUrl: 'https://fake-tracking.com/event',
	},
	allowCypressEnv: false,
	e2e: {
		setupNodeEvents(on, config) {
			return getCompareSnapshotsPlugin(on, config);
		},
		viewportWidth: 640,
		viewportHeight: 1136,
		video: false,
		experimentalWebKitSupport: true,
		specPattern: 'cypress/e2e/*-test.js',
	},
});
