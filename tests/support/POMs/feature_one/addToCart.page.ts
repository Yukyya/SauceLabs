import {   Page, Locator } from '@playwright/test';


export class CartPage {
    constructor(private page: Page) {}

    //////////  LOCATORS //////////

getBackpackAddToCartButton = () => this.page.getByTestId('add-to-cart-sauce-labs-backpack')
getBackpackRemoveButton = () => this.page.getByTestId('remove-sauce-labs-backpack')
getBikeLightAddToCartButton = () => this.page.getByTestId('add-to-cart-sauce-labs-bike-light')
getBikeLightRemoveButton = () => this.page.getByTestId('remove-sauce-labs-bike-light')
getCartBadge = () => this.page.getByTestId('shopping-cart-badge')
getSauceLabsBoltShirtAddToCartButton = () => this.page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt')
getSortdropdown = () => this.page.getByTestId('product_sort_container')
getSortAtoZOption = () => this.page.getByTestId('product_sort_container').getByRole('option', {name: 'Name (A to Z)'})
getSortZtoAOption = () => this.page.getByTestId('product_sort_container').getByRole('option', {name: 'Name (Z to A)'})
getSortLowToHighOption = () => this.page.getByTestId('product_sort_container').getByRole('option', {name: 'Price (low to high)'})
getSortHighToLowOption = () => this.page.getByTestId('product_sort_container').getByRole('option', {name: 'Price (high to low)'})
getSortingOptions = () => this.page.locator('.span.select_container')

/////////  ACTIONS //////////

public async getSortingOptionsCount(){
    await this.getSortingOptions().count();
}

public async addBackpackToCart(){
    await this.getBackpackAddToCartButton().click();
}

public async addBikeLightToCart(){
    await this.getBikeLightAddToCartButton().click();
}

public async removeBackpackFromCart(){
    await this.getBackpackRemoveButton().click();
}

public async removeBikeLightFromCart(){
    await this.getBikeLightRemoveButton().click();
}

public async sortItemsAtoZ(){
    await this.getSortdropdown().click();
    await this.getSortAtoZOption().click();
}

public async sortItemsZtoA(){
    await this.getSortdropdown().click();
    await this.getSortZtoAOption().click();
}

public async sortItemsLowToHigh(){
    await this.getSortdropdown().click();
    await this.getSortLowToHighOption().click();
}

public async sortItemsHighToLow(){
    await this.getSortdropdown().click();
    await this.getSortHighToLowOption().click();
}


}
