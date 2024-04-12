import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page.js';

const pages = {
    home: HomePage
}

Given(/^I am on the start page$/, async () => {
    await pages['home'].open()
    await HomePage.cookiesAcceptBtn.click()
});

When(/^I navigate to the Brands page$/, async () => {
    await HomePage.navInspiration.click()
    await HomePage.navBrands.click()
});

When(/^I select the (.+) category$/, async (category) => {
    (await HomePage.category(category)).click()
});

When(/^I select the brand (.+)$/, async (brand) => {
    // Since the Plysdyr.dk Brand is not initially shown, we are loading the rest of the list, in order to select it
    await HomePage.loadMoreBtn.waitForClickable()
    await HomePage.loadMoreBtn.click()
    await browser.pause(1000) // sometimes, if clickling the button too fast the list does not load
    await HomePage.loadMoreBtn.waitForClickable()
    await HomePage.loadMoreBtn.click()

    await HomePage.selectBrandTitle(brand)
});

Then(/^the brand should have (.*) followers$/, async (followers) => {
    await expect(await HomePage.getFollowersCount()).toEqual(followers)
});

