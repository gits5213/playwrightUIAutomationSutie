import { test, expect } from '@playwright/test';
import landingPage from '../pom/landingPage';
import landingPageData from '../testData/landingPageData.json';
import globalData from '../testData/globalData.json';
const { utils } = require ('../utilities/utils');

const linksLength = 44;
const landingPageLinkLocators = [];
for(let i=1; i<=linksLength; i++){
  landingPageLinkLocators.push(
    landingPage.getLandingPageLinkLocators(i)
  )
}

test.beforeEach(async ({page}) => {
  const util = new utils(page);
  await util.navigateTo(globalData.landingPageUrl)
});

test.describe('Landing Page validation', () => {
  landingPageLinkLocators.forEach((method, index) => {
    test(`Validate expected link text ${landingPageData.landingPageLinksText[index]} on the landing page by md zaman`, async ({page}) => {
      const util = new utils(page);
      await util.verifyToHaveText(method, landingPageData.landingPageLinksText[index])
      
    });  
  });

  test('get link text on the landing page', async ({page}) => {
    for (let i=1; i<=44; i++){
      console.log(await page.locator(landingPage.getLandingPageLinkLocators(i)).textContent())
    }
    
  });

  test('Validate, links count on the landding page ', async ({ page }) => {
    const hrefs = await page.evaluate(() => {
      return Array.from(document.links).map(item => item.href);
    });
    expect(hrefs.length).toEqual(46);
    await console.log(`There are ${hrefs.length} links on the page`);
  });

});
//test