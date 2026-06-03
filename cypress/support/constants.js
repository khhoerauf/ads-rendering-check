const TIMEOUTS = {
	skipButton: 6000,
};

const VIDEO = {
	// Matches cypress/fixtures/assets/video-no-audio.mp4 (~30.7s)
	durationSeconds: 31,
	autoStartDelaySeconds: 2,
	playtimeIntervalMs: 5000,
};

module.exports = { TIMEOUTS, VIDEO };
