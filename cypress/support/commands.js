const compareSnapshotCommand = require('cypress-image-diff-js/command');
compareSnapshotCommand();

Cypress.Commands.add('visitFixtureFile', name => {
	cy.visit(`./cypress/fixtures/${name}.html`);
});
