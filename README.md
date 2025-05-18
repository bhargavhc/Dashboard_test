# DASHBOARD_TEST: Voosh Dashboard E2E Automation

This project contains end-to-end (E2E) Cypress test automation scripts for the [Voosh Dashboard](https://dashboard.voosh.ai/).

## Project Structure

```
DASHBOARD_TEST/
│── cypress.config.js         # Cypress configuration
│── package.json              # Project dependencies
│── README.md                 # Project documentation
│── cypress/
│   ├── downloads/            # Downloaded files during tests
│   ├── e2e/                  # Cypress test files
│   │   └── alertNotificationTest.cy.js
│   └── support/
│       ├── commands.js       # Custom Cypress commands
│       ├── e2e.js            # Global Cypress support
│       └── pages/            # Page Object Model classes
│           ├── alertPage.js
│           └── loginPage.js
```

## Setup

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run Cypress Test Runner**

   ```sh
   npx cypress open
   ```

   Or run tests in headless mode:

   ```sh
   npx cypress run
   ```

## Test Cases

- **Alert Notification Tests** ([cypress/e2e/alertNotificationTest.cy.js](e2e/alertNotificationTest.cy.js)):
  - Automates login and navigation to the Alerts page
  - Sets up alerts for different tabs (Inaccuracy Rate, Unfulfilled Rate, M/I Rate)
  - Covers location selection, trigger conditions, percentage input, frequency, and notification methods

## Custom Commands

Defined in [cypress/support/commands.js](support/commands.js):

- `cy.login(username, password)`: Logs in to the dashboard

## Page Objects

- [`LoginPage`](support/pages/loginPage.js): Handles login and navigation
- [`AlertPage`](support/pages/alertPage.js): Handles alert setup actions

## Configuration

- **Base URL:** Set to `https://dashboard.voosh.ai/` in [cypress.config.js](../cypress.config.js)
- **Timeouts:** Default command timeout is 10 seconds

## Notes

- All tests are written using the Cypress framework.
- Page Object Model is used for maintainability and reusability.