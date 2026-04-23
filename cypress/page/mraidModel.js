const { MraidElements } = require('./elements/mraidElements');
const { NetworkModel } = require('./networkModel');

class MraidModel {
	constructor() {
		this.network = new NetworkModel();
		this.mraid = new MraidElements();

		this.network.interceptTracking('ad_impression');
	}

	isImpressionSent() {
		this.network.checkTrackingExist('ad_impression');
	}

	clickCtaButton() {
		this.network.interceptTracking('cta_clicked');
		cy.window().then(win => {
			cy.stub(win, 'open').as('windowOpen');
		});
		cy.get(this.mraid.ctaButton).should('be.visible').click();
	}

	isClickTrackerSent() {
		this.network.checkTrackingExist('cta_clicked');
	}

	isNewTabOpened(expectedUrl) {
		cy.get('@windowOpen').should('have.been.calledWith', expectedUrl, '_blank');
	}
}

module.exports = { MraidModel };
