import {test, expect} from '@playwright/test';
import {LoginPage} from '../../support/POMs/feature_one/login.page';
import {CartPage} from '../../support/POMs/feature_one/addToCart.page';
import {BurgerMenu} from '../../support/POMs/feature_one/burgerMenu.page';

test.describe('Login feature tests', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await page.goto('/'); 
    })
    test('Login with valid credentials', async ({page}) => {
        await loginPage.loginUser()
});

test('Login with invalid credentials', async ({page}) => {
    await loginPage.loginInvalidUser()
    await expect (loginPage.getErrorMessage()).toContainText('Epic sadface:')
});

});

test.describe('Add to cart feature tests', () => {
    let loginPage: LoginPage;
    let cartPage: CartPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        cartPage = new CartPage(page);
        await page.goto('/'); 
        await loginPage.loginUser()
    })
    test('Add backpack to cart', async ({page}) => {
        await cartPage.addBackpackToCart()
        await expect (cartPage.getCartBadge()).toHaveText('1')
});

    test('Add bike light to cart', async ({page}) => {
        await cartPage.addBikeLightToCart()
        await expect (cartPage.getCartBadge()).toHaveText('1')
});


})

