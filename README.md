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
- `config/` - Configuration files for setting up          the test environment.
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

Playwright Tests
To run the Playwright tests, use the following command:

```npm run playwright``` headless mode
or with runner:
```npm run ui```

This will execute all the Playwright tests located in the playwright/tests directory.

Configuration

Cucumber Configuration
The Cucumber configuration is located in cucumber/cucumber.config.ts. It specifies the paths to the feature files and step definitions, as well as other configurations like timeouts and formatters.

Playwright Configuration
The Playwright configuration is located in playwright/playwright.config.ts. It sets up the test directory, browser options, and other settings.

License

This project is licensed under the MIT License.

Created by `MaxVolobuev` repo `zsofiaAntal`.
This `README.md` provides a comprehensive overview of the project, instructions for setup, running tests, and guidelines for contributing.
