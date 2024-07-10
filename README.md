# Efbet Test Automation Project

This project contains automated tests for the Efbet website using Cucumber and Playwright. The tests are written in TypeScript and are organized to check various functionalities on the Efbet website, including navigation and element visibility.

## Attention
`Main` branch with `Cucumber`  
`Develop` branch with `Playwright`
## Attention

## Project Structure

- `cucumber/` - Contains Cucumber configuration and hooks.
- `playwright/` - Contains Playwright configuration and tests.
- `tests/` - Contains test steps and feature files.
  - `config/` - Configuration files for setting up the test environment.
  - `features/` - Cucumber feature files that describe the test scenarios.
  - `steps/` - Step definitions for the Cucumber scenarios.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Git

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
   cd REPO_NAME

2. Install the dependencies 

```npm install```

Running Tests

Cucumber Tests
To run the Cucumber tests, use the following command:

```npm run cucumber```

This will execute all the Cucumber feature files located in the tests/features directory.

Playwright Tests
To run the Playwright tests, use the following command:

```npm run playwright```

This will execute all the Playwright tests located in the playwright/tests directory.

## Files Explanation

### `hooks.ts`

The `hooks.ts` file contains hooks for the Cucumber tests. Hooks are special functions that run at specific points in the Cucumber test lifecycle. They are used to set up and tear down the test environment.

- **Before hook:** This hook runs before each scenario. It launches a new browser context and a new page for each scenario.
- **After hook:** This hook runs after each scenario. It closes the browser context.

### `world.ts`
The world.ts file defines a custom world for Cucumber. A world is an isolated context for each scenario, allowing you to share state between steps in a scenario.

Configuration

Cucumber Configuration
The Cucumber configuration is located in cucumber/cucumber.config.ts. It specifies the paths to the feature files and step definitions, as well as other configurations like timeouts and formatters.

Playwright Configuration
The Playwright configuration is located in playwright/playwright.config.ts. It sets up the test directory, browser options, and other settings.

License

This project is licensed under the MIT License.

Created by `MaxVolobuev` repo `zsofiaAntal`.
This `README.md` provides a comprehensive overview of the project, instructions for setup, running tests, and guidelines for contributing.
