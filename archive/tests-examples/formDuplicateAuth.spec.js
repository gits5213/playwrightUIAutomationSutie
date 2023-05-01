import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://the-internet.herokuapp.com/');
  await expect.soft(page.locator('li:nth-of-type(21) a')).toHaveText('Form Authentication');
  await page.locator(`li:nth-of-type(21) a`).click({timeout: 10000});
  await page.locator(`input#username`).fill('tomsmith')
  await page.locator('input#password').fill('password');
  await page.locator(`#login button.radius i`).click();
  await expect(page.locator('div#flash')).toHaveText("            Your password is invalid!\n" +
  "           ×");

});