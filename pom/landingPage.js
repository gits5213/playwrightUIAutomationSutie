const landingPage = {
    getLandingPageLinkLocators: (index) => `li:nth-of-type(${index}) a`,

    // getABTesting: `li:nth-of-type(1) a`,
    // getAddRemoveElement: `li:nth-of-type(2) a`,
    // getBasicAuth: `li:nth-of-type(3) a`,
    // getBrokenImage: `li:nth-of-type(4) a`,
    // getChallenginDom: `li:nth-of-type(5) a`
}
module.exports = landingPage;