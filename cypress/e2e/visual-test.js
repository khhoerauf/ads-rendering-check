const { VideoModel } = require('../page/videoModel')

describe('Visual check of ad flow', function () {
	it('landingCard', () => {
		const video = new VideoModel()

		cy.visitFixtureFile('video')
		cy.get(video.videoElements.landingCard).compareSnapshot({
			name: 'landingCard',
			testThreshold: 0.2,
		})
	})

	it('skip button', () => {
		const video = new VideoModel()

		cy.visitFixtureFile('video')
		video.checkVideoDisplayed()
		video.checkSkipIconDisplayed(6000)
		cy.get(video.videoElements.skipButton).compareSnapshot({
			name: 'skipButton',
			testThreshold: 0.2,
		})
	})

	it('end card', () => {
		const video = new VideoModel()

		cy.visitFixtureFile('video')
		video.checkVideoDisplayed()
		video.clickSkipBtnCheckSucceeded(6000)
		cy.get(video.videoElements.endCard).compareSnapshot({
			name: 'endCard',
			testThreshold: 0.2,
		})
	})
})
