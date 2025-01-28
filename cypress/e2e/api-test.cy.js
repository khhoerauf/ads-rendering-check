const { NetworkModel } = require('../page/networkModel')

describe('General functional test of API', function () {
	it('tracks user journey and collects data', () => {
		const net = new NetworkModel()

		net.interceptUserAgent()
		net.interceptShowAndImptrackers()

		cy.visitFixtureFile('video-ad')

		net.checkUserAgentSucceed()
		net.checkShowAndImptracersSucceed()
	})
})
