# Cypress Test Suite for VAST and MRAID Ads

This repository contains a set of Cypress end-to-end tests for validating VAST (Video Ad Serving Template) and MRAID (Mobile Rich Media Ad Interface Definition) ad units in web pages. The purpose of these tests is to ensure that video ads, banner ads, and rich media ads conform to the VAST and MRAID standards, are rendered correctly, and behave as expected across different scenarios.

## Folder Structure

```
portfolio-cypress/
├── cypress/
│   ├── e2e/           # Test specifications
│   ├── fixtures/      # Test data, including VAST and MRAID ad samples
│   ├── page/          # Page Object Model (POM) files for test abstraction
│   └── support/       # Utilities and helper functions
│   └── screenshots/   # Snapshots from visual tests
├── cypress.conf.js    # Cypress default configuration
└── package.json       # Node.js dependencies and scripts
```

## Test Files

1. API Tests, located in: `cypress/integration/apiTest.js`
2. Functional Tests, located in: `cypress/integration/functionality.js`
3. Visual Tests, located in: `cypress/integration/visual.js`

## Precondition

1. Before you begin, ensure that Node.js is installed on your system.
2. Ensure that you have at least one modern browser (Chrome, Firefox or Edge) installed. All supported browsers can be found [here](https://docs.cypress.io/app/references/launching-browsers#Browsers)

## Getting Started

### Install Dependencies

- Run `npm install` to install the required dependencies.

### Running Tests

#### Using Cypress GUI

- Run `npm run cy:open` to open the Cypress application and run tests interactively.

#### Using Cypress in headless mode

- Run `npm run cy:run:chrome` to execute all tests in a headless Chrome browser.
- Run `npm run cy:run:firefox` to execute all tests in a headless Firefox browser.
- Run `npm run cy:run:webkit` to execute all tests in a headless Webkit browser (Safari).

#### Using Cypress in CI/CD

- CI/CD pipeline tests are executed using `cypress-io/github-action@v6`. Instructions for specifying the browser can be found [here](https://github.com/cypress-io/github-action/blob/v6/README.md#browser).
