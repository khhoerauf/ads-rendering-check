const { mraidSelectors } = require('./elements/mraidElements');
const { NetworkModel } = require('./networkModel');

const MRAID_TRACKING_EVENTS = ['ad_impression', 'cta_clicked'];

class MraidModel {
	constructor() {
		this.selectors = mraidSelectors;
		this.network = new NetworkModel();
	}

	setupIntercepts() {
		this.network.interceptTrackingEvents(MRAID_TRACKING_EVENTS);
	}

	stubWindowOpen() {
		cy.window().then(win => {
			cy.stub(win, 'open').as('windowOpen');
		});
	}

	checkImpressionSent() {
		this.network.checkTrackingCalled('ad_impression');
	}

	clickCtaButton() {
		this.stubWindowOpen();
		cy.get(this.selectors.ctaButton).should('be.visible').click();
	}

	checkClickTrackerSent() {
		this.network.checkTrackingCalled('cta_clicked');
	}

	checkNewTabOpened(expectedUrl) {
		cy.get('@windowOpen').should('have.been.calledWith', expectedUrl, '_blank');
	}
}

module.exports = { MraidModel };
