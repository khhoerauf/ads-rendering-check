const compareSnapshotCommand = require('cypress-image-diff-js/command')
compareSnapshotCommand()

Cypress.Commands.add('visitFixtureFile', name => {
	cy.visit(`./cypress/fixtures/${name}.html`)
})

Cypress.Commands.add('spyConsoleLog', spyName => {
	cy.window().then(win => {
		cy.spy(win.console, 'log').as(spyName)
	})
})
