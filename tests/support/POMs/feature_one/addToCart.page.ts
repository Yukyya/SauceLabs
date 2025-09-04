import {   Page, Locator } from '@playwright/test';


export class CartPage {
    constructor(private page: Page) {}

    //////////  LOCATORS //////////

getBackpackAddToCartButton = () => this.page.getByTestId('add-to-cart-sauce-labs-backpack')
getBikeLightAddToCartButton = () => this.page.getByTestId('add-to-cart-sauce-labs-bike-light')
getCartBadge = () => this.page.getByTestId('shopping-cart-badge')

/////////  ACTIONS //////////


public async addBackpackToCart(){
    await this.getBackpackAddToCartButton().click();
    
}

public async addBikeLightToCart(){
    await this.getBikeLightAddToCartButton().click();
    

}


}
