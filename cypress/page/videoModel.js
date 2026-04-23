const { VideoElements } = require('./elements/videoElements');
const { NetworkModel } = require('./networkModel');

class VideoModel {
	constructor() {
		this.videoElements = new VideoElements();
		this.network = new NetworkModel();

		this.network.interceptTracking('video_started');
		this.network.interceptTracking('end_card_shown');
	}

	checkVideoDisplayed() {
		cy.get(this.videoElements.videoContainer).should('be.visible');
		this.network.checkTrackingExist('video_started');
	}

	checkSkipIconDisplayed(timeToWait) {
		cy.get(this.videoElements.skipButton, { timeout: timeToWait }).should(
			'be.visible'
		);
	}

	clickSkipBtnCheckSucceeded(timeToWait) {
		this.network.interceptTracking('skip_button_clicked');
		cy.get(this.videoElements.skipButton, { timeout: timeToWait })
			.should('be.visible')
			.click();
		this.network.checkTrackingExist('skip_button_clicked');
	}

	waitAndClickSkipButton(amountToWait) {
		cy.wait(amountToWait);
		cy.get(this.videoElements.skipButton).should('be.visible').click();
	}

	clickCloseButtonCheckCloseCalled() {
		this.network.interceptTracking('close_button_clicked');
		cy.get(this.videoElements.closeButton).should('be.visible').click();
		this.network.checkTrackingExist('close_button_clicked');
	}

	clickReplayButtonCheckSucceeded() {
		this.network.interceptTracking('replay_button_clicked');
		cy.get(this.videoElements.replayVideo).should('be.visible').click();
		this.network.checkTrackingExist('replay_button_clicked');
		cy.get(this.videoElements.videoContainer).should('be.visible');
	}

	checkVideoPlaybackContinue(videoDuration) {
		const frequency =
			(videoDuration * 1000) / this.network.trackingVideoPlaytimeFrequency;

		this.network.interceptTracking('video_playtime');
		this.network.interceptTracking('video_ended');
		cy.get(this.videoElements.videoContainer).should('be.visible');

		for (let i = 0; i < frequency; i++) {
			cy.wait(this.network.trackingVideoPlaytimeFrequency);
			this.network.checkTrackingExist('video_playtime');
		}

		this.network.checkTrackingExist('video_ended');
		cy.get(this.videoElements.videoContainer).should('not.be.visible');
	}

	checkEndCardDisplayed() {
		cy.get(this.videoElements.endCard).should('be.visible');
		this.network.checkTrackingExist('end_card_shown');
	}
}

module.exports = { VideoModel };
