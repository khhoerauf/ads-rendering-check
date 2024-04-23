// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

{
    beforeEach(function () {
        cy.visit('./cypress/fixtures/video-v3-default-not-muted.html');
        cy.window().then(win => {
            cy.spy(win.console, 'log').as('spyConsoleLog');
        });
    });
}