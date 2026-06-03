const { videoSelectors } = require('./elements/videoElements');
const { NetworkModel } = require('./networkModel');
const { TIMEOUTS, VIDEO } = require('../support/constants');

const SNAPSHOT_THRESHOLDS = {
	landingCard: 0.05,
	skipButton: 0.12,
	endCard: 0.1,
};

const VIDEO_TRACKING_EVENTS = [
	'video_started',
	'end_card_shown',
	'skip_button_clicked',
	'close_button_clicked',
	'replay_button_clicked',
	'video_playtime',
	'video_ended',
];

class VideoModel {
	constructor() {
		this.selectors = videoSelectors;
		this.network = new NetworkModel();
	}

	setupIntercepts() {
		this.network.interceptTrackingEvents(VIDEO_TRACKING_EVENTS);
	}

	checkVideoDisplayed() {
		cy.get(this.selectors.videoContainer).should('be.visible');
		this.network.checkTrackingCalled('video_started');
	}

	checkSkipButtonVisible(timeout = TIMEOUTS.skipButton) {
		cy.get(this.selectors.skipButton, { timeout }).should('be.visible');
	}

	clickSkipButton(timeout = TIMEOUTS.skipButton) {
		cy.get(this.selectors.skipButton, { timeout }).should('be.visible').click();
		this.network.checkTrackingCalled('skip_button_clicked');
	}

	clickCloseButton() {
		cy.get(this.selectors.closeButton).should('be.visible').click();
		this.network.checkTrackingCalled('close_button_clicked');
		cy.get(this.selectors.endCard).should('not.be.visible');
	}

	clickReplayButton() {
		cy.get(this.selectors.replayVideo).should('be.visible').click();
		this.network.checkTrackingCalled('replay_button_clicked');
		cy.get(this.selectors.videoContainer).should('be.visible');
	}

	checkVideoPlaysToEnd(
		videoDurationSeconds = VIDEO.durationSeconds,
		playtimeIntervalMs = VIDEO.playtimeIntervalMs
	) {
		const playtimeEventCount = Math.floor(
			(videoDurationSeconds * 1000) / playtimeIntervalMs
		);
		// Playtime beacons are spaced by playtimeIntervalMs; default cy.wait timeout (4s) is too short.
		const playtimeWaitTimeout = playtimeIntervalMs + 2000;
		const videoEndTimeout =
			(videoDurationSeconds + VIDEO.autoStartDelaySeconds + 5) * 1000;

		cy.get(this.selectors.videoContainer).should('be.visible');

		for (let i = 0; i < playtimeEventCount; i++) {
			this.network.checkTrackingCalled('video_playtime', {
				timeout: playtimeWaitTimeout,
			});
		}

		this.network.checkTrackingCalled('video_ended', { timeout: videoEndTimeout });
		cy.get(this.selectors.videoContainer).should('not.be.visible');
	}

	checkEndCardDisplayed() {
		cy.get(this.selectors.endCard).should('be.visible');
		this.network.checkTrackingCalled('end_card_shown');
	}

	skipToEndCard(skipButtonTimeout = TIMEOUTS.skipButton) {
		this.clickSkipButton(skipButtonTimeout);
		this.checkEndCardDisplayed();
	}

	compareLandingCardSnapshot() {
		cy.get(this.selectors.landingCard).should('be.visible').compareSnapshot({
			name: 'landingCard',
			testThreshold: SNAPSHOT_THRESHOLDS.landingCard,
		});
	}

	compareSkipButtonSnapshot() {
		cy.get(this.selectors.skipButton).should('be.visible').compareSnapshot({
			name: 'skipButton',
			testThreshold: SNAPSHOT_THRESHOLDS.skipButton,
		});
	}

	compareEndCardSnapshot() {
		cy.get(this.selectors.endCard).should('be.visible').compareSnapshot({
			name: 'endCard',
			testThreshold: SNAPSHOT_THRESHOLDS.endCard,
		});
	}
}

module.exports = { VideoModel };
