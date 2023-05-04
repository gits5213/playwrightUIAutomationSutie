 ## Playwright ui and api automation sutie instruction 
 
 ## [Playwright Youtube video tutorials series](https://www.youtube.com/playlist?list=PLkAQhiYpW_a3TEYbrATOWF_KXhNe0qwdo)
 - [Playwright Javascript UI Automation Series-00|Install-Playwright|NodeJS|VS Code|JAVA](https://youtu.be/-8ANmdCruh4)
 - [Playwright Javascript UI Automation Series-01 | Scratch Projects](https://youtu.be/su5E6_vtyzc)
 - [Playwright Javascript UI Automation Series-02 | npm | Workers | baseUrl | Codegen | Package.json](https://youtu.be/q_5ntdKri7M)
 - [Playwright Javascript UI Automation Series-03 | Script Variable | Running test headless | Debug | headed | UI Debug Mode](https://youtu.be/BAlHgijxygQ)
 - [Playwright Javascript UI Automation Series-04 | Multiple Reportings](https://youtu.be/teXhxzvUojI)
 - [Playwright Javascript UI Automation Series-05 | Grouping Report](https://youtu.be/kRwakqNTiQE)
 - [Playwright Javascript UI Automation Series-06 | Adding real-time test scenario (test case) | Locators ](https://youtu.be/9BeukRsmAAY)
 - [Playwright Javascript UI Automation Series-07 | UI Test Runner Mode| Screenshot | Assertion ](https://youtu.be/amKOHcVyptg)
 - [Playwright Javascript UI Automation Series-08 | Headless Mode| Multiple Assertion ](https://youtu.be/lgLIF8CeGfg)
 - [Playwright Javascript UI Automation Series-09 | Headless Mode| | Hooks | Organize Tests](https://youtu.be/CZTDJUfynIo)
 - [Playwright Javascript UI Automation Series-10 | Headless Mode| | Page Object Model | Organize Tests](https://youtu.be/Kh69sacfpUY)
 - [Playwright Javascript UI Automation Series-10a | Headless Mode| | Page Object Model | Organize Tests](https://youtu.be/BNGLEvrvWwI)
 - [Playwright Javascript UI Automation Series-11 | Data Driven Concept| POM | Organize Tests](https://youtu.be/uh-tP26WFiM)
 - [Playwright Javascript UI Automation Series-12 | Data, Keyword Driven Concept| POM |Organize Tests](https://youtu.be/LHCj79CTJTk)
 - [Playwright Javascript UI Automation Series-12a | Keyword Driven Concept| Troubleshoot](https://youtu.be/7FMKtl-vbA8)
 - [Playwright Javascript UI Automation Series-13 | Keyword Driven Concept| Extended ](https://youtu.be/6aFqCJQtAng)
 - [Playwright Javascript UI Automation Series-14 | Code Optimization](https://youtu.be/N7XXtnxU0rg)
 - [GITS - Playwright Javascript UI Automation Series-14a | Code Optimization Extended](https://youtu.be/3URHbMUyg5s)
 - [GITS - Playwright Javascript UI Automation Series-15 | Git | GitHub | Project Added](https://youtu.be/BiRrN3RkEfs)
 - [GITS - Playwright Javascript UI Automation Series-16 | GitHub Action | Allre Report deploy to GitHub Page](https://youtu.be/G1CTqGpXOSs)
 - [GITS - Playwright Javascript UI Automation Series-17 | Parallelism and Sharding test execution](https://youtu.be/DnfA-IwhHUo)
 
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
