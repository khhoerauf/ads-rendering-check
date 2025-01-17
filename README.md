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
├── cypress.conf.js    # WebdriverIO configuration
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

Once you have Node.js installed, you can install the required dependencies.
Run the following command in your terminal:

- `npm install`

## Running Tests

### Using Cypress GUI

To run the tests using the Cypress GUI, execute the following command in your terminal:

- `npx cypress open`

This will open the Cypress application, allowing you to select and run individual tests or the entire suite.

### Using Cypress in Terminal

To run all tests using the headless Electron browser (Chromium), execute the following command in your terminal:

- `npx cypress run --headless`

This will run all the tests in a headless mode without opening the Cypress GUI.
