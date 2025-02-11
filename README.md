# Cypress Test Suite for Video and MRAID Ads

This repository contains a set of Cypress end-to-end tests for validating Video and MRAID ad units in web pages. The purpose of these tests is to ensure that video and banner ads are rendered correctly and behave as expected across different scenarios.

Read instructions below.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWlwMnQzZW5qdGhua3NyaTBzZmh1aHI2MW8zbTJiOXRhMHNoaHV4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w8wrhA7ExEsPUrIYWC/giphy.gif)

## Folder Structure

```
ads-rendering-check/
├── cypress/
│   ├── e2e/                         # Test specifications
│   ├── fixtures/                    # Test data, including video and banner ad samples
│   ├── page/                        # Page Object Model (POM) files for test abstraction
│   └── support/                     # Utilities and helper functions
├── cypress-image-diff-screenshots/
│   ├── baseline/                    # Expected snapshots used for visual test comparison
│   ├── comparison/                  # Actual snapshots generated after test execution
│   └── diff/                        # Snapshots highlighting discrepancies after test execution
├── cypress.conf.js                  # Cypress default configuration file
└── package.json                     # Node.js dependencies and scripts
```

## Test Files

1. Functional Tests, located in: `cypress/integration/functional-*test.js`
2. Visual Tests, located in: `cypress/integration/visual-*test.js`

## Precondition

1. Before you begin, ensure that Node.js is installed on your system.
2. Ensure that you have at least one modern browser (Chrome, Firefox or Edge) installed. All supported browsers can be found [here](https://docs.cypress.io/app/references/launching-browsers#Browsers)

## Getting Started

### Install Dependencies

- Run `npm install` to install the required dependencies.

### Running Tests

#### Using Cypress GUI

- Run `npm run cy:open` to open the Cypress application and run functional tests interactively.
- `IMPORTANT`: Please do not execute visual tests in Cypress GUI mode. If you do, remember not to push changes to baseline snapshots.

Here’s an example of how you might execute tests locally by using 'only' tag:

```
it.only('allows to skip video after 5 seconds'...
```

https://github.com/user-attachments/assets/a043925e-f2bc-4152-8d0c-e28212aaba02

#### Using Cypress in headless mode

- Run `npm run cy:run:chrome` to execute all tests in a headless Chrome browser.
- Run `npm run cy:run:firefox` to execute all tests in a headless Firefox browser.
- Run `npm run cy:run:webkit` to execute all tests in a headless Webkit browser (Safari).

#### Using Cypress in CI/CD

- CI/CD pipeline tests are executed using `cypress-io/github-action@v6`. Instructions for specifying the browser can be found [here](https://github.com/cypress-io/github-action/blob/v6/README.md#browser).
