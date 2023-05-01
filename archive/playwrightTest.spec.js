import { test, expect } from '@playwright/test';

test('validate, click on the writing test link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
});
test('validate, links', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
});