import { expect } from '@playwright/test';

exports.utils = class utils {
    
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url){
        await this.page.goto(url)   
    }

    async clickOnElement(identifier){
        await this.page.locator(identifier).click();
    }

    async mouseHover(identifier){
        await this.page.locator(identifier).hover();
    }

    async fillInputBox(identifier, text){
        await this.page.locator(identifier).fill(text);
    }

    async dblClickOnElement(identifier){
        await this.page.locator(identifier).dblclick();
    }

    async focusOnElement(identifier){
        await this.page.locator(identifier).focus();
    }

    async verifyTitle(title){
        await expect(page).toHaveTitle(title);
    }

    async verifyContainsUrl(url){
        await expect(page).toHaveURL(url);
    }

    async verifyToHaveText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toHaveText(expectedText);
    }

    async verifyToHaveVlue(identifier, inputFieldText){
        await expect.soft(this.page.locator(identifier)).toHaveValue(inputFieldText);
    }

    async verifyContainText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toContainText(expectedText);
    }

    async verifyToHaveAttrbutes(attr, value){
        await expect.soft(this.page.locator(identifier)).toHaveAttribute(attr, value);
    }

    async verifyToHaveCss(key, value){  
        await expect.soft(this.page.locator(identifier)).toHaveCSS(key, value);
    }

    async verifyElementIsVisible(identifier){
        await expect.soft(this.page.locator(identifier)).isVisible();
    }

    async verifyRadioBtnChecked(identifier){
        await expect.soft(this.page.locator(identifier)).toBeChecked();
    }

    async verifyTextBoxEditable(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEditable();
    }

    async verifyTextBoxEnabled(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEnabled();
    }

    async verifyElementFocused(identifier){
        await expect.soft(this.page.locator(identifier)).toBeFocused();
    }


}