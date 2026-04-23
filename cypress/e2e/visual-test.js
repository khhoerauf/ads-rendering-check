const { VideoModel } = require('../page/videoModel');

describe('Visual check of ad flow', function () {
	it('should display landing card on initial load', () => {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		cy.get(video.videoElements.landingCard).compareSnapshot({
			name: 'landingCard',
			testThreshold: 0.05,
		});
	});

	it('should show skip button after 5 seconds of playback', () => {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.checkSkipIconDisplayed(6000);
		cy.get(video.videoElements.skipButton).compareSnapshot({
			name: 'skipButton',
			testThreshold: 0.12,
		});
	});

	it('should display end card after video completes', () => {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.clickSkipBtnCheckSucceeded(6000);
		cy.get(video.videoElements.endCard).compareSnapshot({
			name: 'endCard',
			testThreshold: 0.1,
		});
	});
});
