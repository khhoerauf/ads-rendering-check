const { VideoModel } = require('../page/videoModel');

describe('Visual check of ad flow', () => {
	let video;

	beforeEach(() => {
		video = new VideoModel();
		video.setupIntercepts();
		cy.visitFixtureFile('video');
	});

	it('should display landing card on initial load', () => {
		video.compareLandingCardSnapshot();
	});

	it('should show skip button after 5 seconds of playback', () => {
		video.checkVideoDisplayed();
		video.checkSkipButtonVisible();
		video.compareSkipButtonSnapshot();
	});

	it('should display end card after video completes', () => {
		video.checkVideoDisplayed();
		video.clickSkipButton();
		video.compareEndCardSnapshot();
	});
});
