import { test, expect } from '@playwright/test';
import landingPage from '../pom/landingPage';
import landingPageData from '../testData/landingPageData.json';
const { utils } = require ('../tests/utilities/utils');



  
test.beforeEach(async ({ page }) => {
  const util = new utils(page);
  await page.goto('/');
});


test.describe('Landing Page validation', () => {
  test('Validate, links count on the landding page ', async ({ page }) => {
    const hrefs = await page.evaluate(() => {
      return Array.from(document.links).map(item => item.href);
    });
    expect(hrefs.length).toEqual(46);
    await console.log(`There are ${hrefs.length} links on the page`);
  });

  test('Validate expected link text on the landing page by MD Zaman', async ({ page }) => {
    const util = new utils(page);
    await util.verifyToHaveText(landingPage.getABTesting, landingPageData.aBTesting)
    await util.verifyToHaveText(landingPage.getAddRemoveElement, landingPageData.addRemoveElements)
    await util.verifyToHaveText(landingPage.getBasicAuth, landingPageData.basicAuth)
    await util.verifyToHaveText(landingPage.getBrokenImage, landingPageData.brokenImages)
    await util.verifyToHaveText(landingPage.getChallenginDom, landingPageData.challengingDOM)
  });

  test('Validate expected link text on the landing page ', async ({ page }) => {
    await expect.soft(page.locator('li:nth-of-type(6) a')).toHaveText('Checkboxes');
    await expect.soft(page.locator('li:nth-of-type(7) a')).toHaveText('Context Menu');
    await expect.soft(page.locator('li:nth-of-type(8) a')).toHaveText('Digest Authentication');
    await expect.soft(page.locator('li:nth-of-type(9) a')).toHaveText('Disappearing Elements');
    await expect.soft(page.locator('li:nth-of-type(10) a')).toHaveText('Drag and Drop');
    await expect.soft(page.locator('li:nth-of-type(11) a')).toHaveText('Dropdown');
    await expect.soft(page.locator('li:nth-of-type(12) a')).toHaveText('Dynamic Content');
    await expect.soft(page.locator('li:nth-of-type(13) a')).toHaveText('Dynamic Controls');
    await expect.soft(page.locator('li:nth-of-type(14) a')).toHaveText('Dynamic Loading');
    await expect.soft(page.locator('li:nth-of-type(15) a')).toHaveText('Entry Ad');
    await expect.soft(page.locator('li:nth-of-type(16) a')).toHaveText('Exit Intent');
    await expect.soft(page.locator('li:nth-of-type(17) a')).toHaveText('File Download');
    await expect.soft(page.locator('li:nth-of-type(18) a')).toHaveText('File Upload');
    await expect.soft(page.locator('li:nth-of-type(19) a')).toHaveText('Floating Menu');
    await expect.soft(page.locator('li:nth-of-type(20) a')).toHaveText('Forgot Password');
    await expect.soft(page.locator('li:nth-of-type(21) a')).toHaveText('Form Authentication');
    await expect.soft(page.locator('li:nth-of-type(22) a')).toHaveText('Frames');
    await expect.soft(page.locator('li:nth-of-type(23) a')).toHaveText('Geolocation');
    await expect.soft(page.locator('li:nth-of-type(24) a')).toHaveText('Horizontal Slider');
    await expect.soft(page.locator('li:nth-of-type(25) a')).toHaveText('Hovers');
    await expect.soft(page.locator('li:nth-of-type(26) a')).toHaveText('Infinite Scroll');
    await expect.soft(page.locator('li:nth-of-type(27) a')).toHaveText('Inputs');
    await expect.soft(page.locator('li:nth-of-type(28) a')).toHaveText('JQuery UI Menus');
    await expect.soft(page.locator('li:nth-of-type(29) a')).toHaveText('JavaScript Alerts');
    await expect.soft(page.locator('li:nth-of-type(30) a')).toHaveText('JavaScript onload event error');
    await expect.soft(page.locator('li:nth-of-type(31) a')).toHaveText('Key Presses');
    await expect.soft(page.locator('li:nth-of-type(32) a')).toHaveText('Large & Deep DOM');
    await expect.soft(page.locator('li:nth-of-type(33) a')).toHaveText('Multiple Windows');
    await expect.soft(page.locator('li:nth-of-type(34) a')).toHaveText('Nested Frames');
    await expect.soft(page.locator('li:nth-of-type(35) a')).toHaveText('Notification Messages');
    await expect.soft(page.locator('li:nth-of-type(36) a')).toHaveText('Redirect Link');
    await expect.soft(page.locator('li:nth-of-type(37) a')).toHaveText('Secure File Download');
    await expect.soft(page.locator('li:nth-of-type(38) a')).toHaveText('Shadow DOM');
    await expect.soft(page.locator('li:nth-of-type(39) a')).toHaveText('Shifting Content');
    await expect.soft(page.locator('li:nth-of-type(40) a')).toHaveText('Slow Resources');
    await expect.soft(page.locator('li:nth-of-type(41) a')).toHaveText('Sortable Data Tables');
    await expect.soft(page.locator('li:nth-of-type(42) a')).toHaveText('Status Codes');
    await expect.soft(page.locator('li:nth-of-type(43) a')).toHaveText('Typos');
    await expect.soft(page.locator('li:nth-of-type(44) a')).toHaveText('WYSIWYG Editor');
  });
});