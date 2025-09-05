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



