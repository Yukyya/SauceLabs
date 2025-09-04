import {test, expect} from '@playwright/test';
import { CheckoutPage } from '../../support/POMs/feature_one/checkout.page';
import  { CartPage } from '../../support/POMs/feature_one/addToCart.page';
import { checkOutData, mockTestData } from '../../support/utils/mock-test-data';

test.describe ('Checkout flow', () => {
    let checkout: CheckoutPage;
    let cart: CartPage;

    test.beforeEach(async ({page,}) => {
        await page.goto('/inventory.html');
        checkout = new CheckoutPage(page);
        cart = new CartPage(page);
    });

test('test case 2 : fill checkout information', async ({page}) => {
    await test.step('Add items to cart and navigate to checkout page', async () => {
    
    await cart.addBackpackToCart();
    
    await cart.addBikeLightToCart();
    
    
   })
    await test.step('Navigate to cart and then to checkout page', async () => {
        await checkout.navigateToCart();
        await checkout.navigateToCheckout();

    })
    await test.step('Fill checkout information and continue', async () => {
        await checkout.fillFirstNameOnly(checkOutData.checkout.firstName);
        await checkout.fillLastNameOnly(checkOutData.checkout.lastName);
        await checkout.fillPostalCodeOnly(checkOutData.checkout.postalCode);
        await checkout.clickContinueCheckoutButton();
    })
    
    await expect(page).toHaveURL(/checkout-step-two.html/);
    
})

test('test case 1: Go to checkout page', async ({page}) => {
    await cart.addBackpackToCart();
    await cart.addBikeLightToCart();
    await checkout.navigateToCart();
    await expect(page).toHaveURL(/cart.html/);
});



})






