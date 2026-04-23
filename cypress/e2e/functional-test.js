const { VideoModel } = require('../page/videoModel');
const { MraidModel } = require('../page/mraidModel');

describe('General functionality with tracking checks', function () {
	it('video should be able to skip after 5 seconds', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.clickSkipBtnCheckSucceeded(6000);
		video.checkEndCardDisplayed();
	});

	it('end card should show after video is finished', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.checkVideoPlaybackContinue(30);
		video.checkEndCardDisplayed();
	});

	it('close button should hide end card and send tracking', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.clickSkipBtnCheckSucceeded(6000);
		video.checkEndCardDisplayed();
		video.clickCloseButtonCheckCloseCalled();
	});

	it('replay button should restart video and send tracking', function () {
		const video = new VideoModel();

		cy.visitFixtureFile('video');
		video.checkVideoDisplayed();
		video.clickSkipBtnCheckSucceeded(6000);
		video.checkEndCardDisplayed();
		video.clickReplayButtonCheckSucceeded();
	});

	it('static ad should render with clickable button', function () {
		const mraid = new MraidModel();
		cy.visitFixtureFile('mraid-ad');

		mraid.isImpressionSent();
		mraid.clickCtaButton();

		mraid.isClickTrackerSent();
		mraid.isNewTabOpened('https://www.example.com');
	});
});
