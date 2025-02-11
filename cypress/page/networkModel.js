class NetworkModel {
	constructor() {
		this.api = Cypress.env('apiUrl');
		this.trackingVideoPlaytimeFrequency = 5000;
	}

	async interceptTracking(eventType) {
		cy.intercept('GET', `${this.api}?event=${eventType}*`, []).as(
			`getTracking-${eventType}`
		);
	}

	async checkTrackingExist(eventType) {
		cy.wait(`@getTracking-${eventType}`).then(interception => {
			expect(interception.response.statusCode).to.equal(200);
		});
	}
}

module.exports = { NetworkModel };
