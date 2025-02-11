const { VideoElements } = require('./elements/videoElement');
const { NetworkModel } = require('./networkModel');

class VideoModel {
	constructor() {
		this.videoElements = new VideoElements();
		this.network = new NetworkModel();

		this.network.interceptTracking('video_started');
		this.network.interceptTracking('end_card_shown');
	}

	async checkVideoDisplayed() {
		cy.get(this.videoElements.videoContainer).should('be.visible');
		this.network.checkTrackingExist('video_started');
	}

	async checkSkipIconDisplayed(timeToWait) {
		cy.get(this.videoElements.skipButton, { timeout: timeToWait }).should(
			'be.visible'
		);
	}

	async clickSkipBtnCheckSucceeded(timeToWait) {
		this.network.interceptTracking('skip_button_clicked');
		cy.get(this.videoElements.skipButton, { timeout: timeToWait })
			.should('be.visible')
			.click();
		this.network.checkTrackingExist('skip_button_clicked');
	}

	async waitAndClickSkipButton(amountToWait) {
		cy.wait(amountToWait);
		cy.get(this.videoElements.skipButton).should('be.visible').click();
	}

	async clickCloseButtonCheckCloseCalled() {
		cy.get(this.videoElements.closeButton).should('be.visible').click();
	}

	async checkVideoPlaybackContinue(videoDuration) {
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

	async checkEndCardDisplayed() {
		cy.get(this.videoElements.endCard).should('be.visible');
		this.network.checkTrackingExist('end_card_shown');
	}
}

module.exports = { VideoModel };
