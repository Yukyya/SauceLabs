import {test, expect} from '@playwright/test';
import { CartPage } from '../../support/POMs/feature_one/addToCart.page';


test.describe('Add to cart feature tests', () => {
    let cartPage: CartPage;
    test.beforeEach(async ({page}) => {
        cartPage = new CartPage(page);
        await page.goto('inventory.html'); 
    })
    test('Add backpack to cart', async ({page}) => {
        await cartPage.addBackpackToCart()
        await expect (cartPage.getCartBadge()).toHaveText('1')
});

    test('Add bike light to cart', async ({page}) => {
        await cartPage.addBikeLightToCart()
        await expect (cartPage.getCartBadge()).toHaveText('1')
});

    test('Add multiple items to cart', async ({page}) => {
        await cartPage.addBackpackToCart()
        await cartPage.addBikeLightToCart()
        await expect (cartPage.getCartBadge()).toHaveText('2')

    });    


})