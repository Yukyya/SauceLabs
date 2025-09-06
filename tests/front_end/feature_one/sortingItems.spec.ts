import {test, expect} from '@playwright/test';
import {CartPage} from '../../support/POMs/feature_one/addToCart.page';

test.describe('Sorting Items', () =>  {
    let cartPage: CartPage;

    test.beforeEach(async ({page}) =>  {
        await page.goto('/inventory.html');
        cartPage = new CartPage(page);
    });

    test.skip('open sort dropdown',{
                annotation: {
                type: 'issue',
                description: 'This test is skipped because the sort dropdown is not working as expected.',
            },
        }, async ({page}) =>  {
        await cartPage.getSortdropdown().click();
        await expect(page.getByRole('option', {name: 'Name (A to Z)'})).toBeVisible();
    })


    
})