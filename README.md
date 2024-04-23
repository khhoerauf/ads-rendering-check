# portfolio-cypress
This repository contains automated end-to-end tests for our application using Cypress. Cypress is a modern testing framework that allows us to write, run, and debug our tests efficiently. These tests help ensure our application functions correctly and meets quality standards. It includes both functional and visual tests.


## Test Files

- Functional tests are located in: `cypress/integration/functionality.js`
- Visual tests are located in: `cypress/integration/visual.js`

## Snapshots

Snapshots from visual tests are saved in: `cypress/screenshots/visual`


## Getting Started

To begin using this project, you need to have Node.js installed on your machine. Once you have Node.js installed, you can install the required dependencies.
Run the following command in your terminal:

-   `npm install`

## Running Tests

### Using Cypress GUI

To run the tests using the Cypress GUI, execute the following command in your terminal:

-  `npx cypress open`

This will open the Cypress application, allowing you to select and run individual tests or the entire suite.

### Using Cypress in Terminal

To run all tests using the headless Electron browser (Chromium), execute the following command in your terminal:

- `npx cypress run --headless`

This will run all the tests in a headless mode without opening the Cypress GUI.
