const { CoreModel } = require('../page/coreModel')
const { MraidModel } = require('../page/mraidModel')

	
describe('General functional test with checking console logs', function () {
	it('VAST | plays video in mobile viewport', () => {
		const core = new CoreModel()
		cy.visitFixtureFile('video-ad')
		cy.spyConsoleLog('spyConsoleLog')
		

		core.checkVideoDisplayed()
	})

	it('VAST | allows to skip ad after 5 seconds and close', () => {
		const core = new CoreModel()
		cy.visitFixtureFile('video-ad')
		cy.spyConsoleLog('spyConsoleLog')

		core.waitAndClickSkipButton(5000)
		core.clickCloseButtonCheckCloseCalled()
	})

	it('VAST | allows to click on HUD model', function () {
		const core = new CoreModel()
		cy.visitFixtureFile('video-ad')
		cy.spyConsoleLog('spyConsoleLog')

		core.clickVideoPlayback()
		core.clickHudCheckClickCalled()
	})

	it('VAST | mute button validation', function () {
		const core = new CoreModel()
		cy.visitFixtureFile('video-ad')
		cy.spyConsoleLog('spyConsoleLog')

		core.checkVideoDisplayed()

		core.clickSkipMuteButtonCheckMuteCalled('unmute')
		core.clickSkipMuteButtonCheckMuteCalled('mute')
	})

	it('MRAID | static ad has CTA button', function () {
		const mraid = new MraidModel()
		cy.visitFixtureFile('mraid-ad');

		mraid.clickCtaButton()
	})
})
