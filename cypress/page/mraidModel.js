class MraidModel {
	clickCtaButton() {
		cy.get('#ctaButton').click();
	}
}

module.exports = { MraidModel };
