class NetworkModel {
	constructor() {
		this.apiUrl = Cypress.expose('apiUrl');
	}

	trackingAlias(eventType) {
		return `tracking-${eventType}`;
	}

	interceptTracking(eventType) {
		cy.intercept('GET', `${this.apiUrl}?event=${eventType}*`, {
			statusCode: 200,
			body: {},
		}).as(this.trackingAlias(eventType));
	}

	interceptTrackingEvents(eventTypes) {
		eventTypes.forEach(eventType => this.interceptTracking(eventType));
	}

	checkTrackingCalled(eventType, { timeout } = {}) {
		const waitOptions = timeout !== undefined ? { timeout } : {};

		cy.wait(`@${this.trackingAlias(eventType)}`, waitOptions)
			.its('response.statusCode')
			.should('eq', 200);
	}
}

module.exports = { NetworkModel };
