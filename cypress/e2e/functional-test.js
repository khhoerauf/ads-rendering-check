const { VideoModel } = require('../page/videoModel');
const { MraidModel } = require('../page/mraidModel');
const { VIDEO } = require('../support/constants');

describe('General functionality with tracking checks', () => {
	describe('Video ad', () => {
		let video;

		beforeEach(() => {
			video = new VideoModel();
			video.setupIntercepts();
			cy.visitFixtureFile('video');
		});

		it('should be skippable after 5 seconds', () => {
			video.checkVideoDisplayed();
			video.skipToEndCard();
		});

		it('should show end card after video finishes', () => {
			video.checkVideoDisplayed();
			video.checkVideoPlaysToEnd(VIDEO.durationSeconds);
			video.checkEndCardDisplayed();
		});

		it('should hide end card and send tracking when close button is clicked', () => {
			video.checkVideoDisplayed();
			video.skipToEndCard();
			video.clickCloseButton();
		});

		it('should restart video and send tracking when replay button is clicked', () => {
			video.checkVideoDisplayed();
			video.skipToEndCard();
			video.clickReplayButton();
		});
	});

	describe('MRAID static ad', () => {
		let mraid;

		beforeEach(() => {
			mraid = new MraidModel();
			mraid.setupIntercepts();
			cy.visitFixtureFile('mraid-ad');
		});

		it('should render with a clickable CTA button', () => {
			mraid.checkImpressionSent();
			mraid.clickCtaButton();
			mraid.checkClickTrackerSent();
			mraid.checkNewTabOpened('https://www.example.com');
		});
	});
});
