 ## Playwright ui and api automation sutie instruction 
 
 
## Executing end to end test
 npx playwright test
    Runs the end-to-end tests.

## Executing end to end test with ui debug mode
  npx playwright test --ui
    Starts the interactive UI mode.

## Exectuing end to end test on chromium 
  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

## Record the script > copy and past it into your class file
  npx playwright codegen
    Auto generate tests with Codegen.

## Headless executing test 
We suggest that you begin by typing:

    npx playwright test 

## Headed mode 
npx playwright test ----project=chromium --headed