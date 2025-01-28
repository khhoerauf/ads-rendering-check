const muteImage = '#mute-image'

describe.skip('Mute button test', function () {
	it('TC_01 Mute', () => {
		cy.get(muteImage).screenshot()
	})

	it('TC_02 Unmute', () => {
		cy.get(muteImage).click().screenshot()
	})
})
