const { VideoElements } = require('./elements/videoElement')

class CoreModel {
	constructor() {
		this.videoElements = new VideoElements()
	}

	async checkVideoDisplayed() {
		cy.get(this.videoElements.videoContainer).should('be.visible')
		cy.get('@spyConsoleLog').should('be.calledWith', 'Chartboost.Utils.show')
	}

	async waitAndClickSkipButton(amountToWait) {
		cy.wait(amountToWait)
		cy.get(this.videoElements.skipButton).should('be.visible').click()
	}

	async clickHudCheckClickCalled() {
		cy.get(this.videoElements.hudContainer)
			.should('be.visible')
			.contains('Download Now')
			.click()
			.then(() => {
				cy.get('@spyConsoleLog').should(
					'be.calledWith',
					'Chartboost.Utils.click'
				)
			})
	}

	async clickCloseButtonCheckCloseCalled() {
		cy.get(this.videoElements.closeButton)
			.should('be.visible')
			.click()
			.then(() => {
				cy.get('@spyConsoleLog').should('be.calledWith', 'mraid.close')
			})
	}

	async clickSkipMuteButtonCheckMuteCalled(actionCalled) {
		cy.get(this.videoElements.muteImage)
			.should('be.visible')
			.click()
			.then(() => {
				cy.get('@spyConsoleLog').should(
					'be.calledWith',
					'Chartboost.Utils.callNative',
					actionCalled,
					undefined
				)
			})
	}

	async clickVideoPlayback() {
		cy.get(this.videoElements.videoContainer).should('be.visible').click()
	}
}

module.exports = { CoreModel }
