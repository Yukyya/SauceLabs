import {test, expect} from '@playwright/test';
import { CheckoutPage } from '../support/POMs/feature_one/checkout.page';
import { CartPage } from '../support/POMs/feature_one/addToCart.page';
import { checkOutData, mockTestData } from '../support/utils/mock-test-data';



test.describe (' e2e Checkout flow', () => {
    let checkout: CheckoutPage;
    let cart: CartPage;

    test.beforeEach(async ({page,}) => {
        await page.goto('/inventory.html');
        checkout = new CheckoutPage(page);
        cart = new CartPage(page);
    });


    test('Checkout with items in cart', async ({page}) => {
        await test.step('Add items to cart', async () => {
            await cart.addBackpackToCart();
            await cart.addBikeLightToCart();
        })

        await test.step('Navigate to cart page', async () => {
            await checkout.navigateToCart();
            await expect(page).toHaveURL(/cart.html/);               
        })

        await test.step('Procceed to checkout', async () => {
                await checkout.navigateToCheckout();
                await expect(page).toHaveURL(/checkout-step-one.html/);
                 
        })

        await test.step('Fill in your checkout information', async () => {
            await checkout.fillFirstNameOnly(checkOutData.checkout.firstName);
            await checkout.fillLastNameOnly(checkOutData.checkout.lastName);
            await checkout.fillPostalCodeOnly(checkOutData.checkout.postalCode);
            await checkout.clickContinueCheckoutButton();

        })

        await test.step('Finish checkout', async () => {
            await checkout.finishCheckout();
            await expect(page).toHaveURL(/checkout-complete.html/);
        })
        





    })
        

    
});