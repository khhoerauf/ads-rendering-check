const { VideoModel } = require('../page/videoModel');
const { MraidModel } = require('../page/mraidModel');

describe('General functionality with tracking checks', function () {
	it.only('allows to skip video after 5 seconds', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.clickSkipBtnCheckSucceeded(6000);
		video.checkEndCardDisplayed();
	});

	it('end card is shown after video is finished', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.checkVideoPlaybackContinue(30);
		video.checkEndCardDisplayed();
	});

	it('static ad should render with clickable button', function () {
		const mraid = new MraidModel();

		cy.visitFixtureFile('mraid-ad');
		mraid.clickCtaButton();
	});
});
