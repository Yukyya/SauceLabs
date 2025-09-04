import {Page, expect} from '@playwright/test';
import { mockTestData } from '../../utils/mock-test-data';
import { checkOutData } from '../../utils/mock-test-data';



export class CheckoutPage {
    constructor(private page: Page) {} 

    //////////  LOCATORS //////////


    getShoppingCartLink = () => this.page.getByTestId('shopping-cart-link')
    getCheckoutButton = () => this.page.getByTestId('checkout')
    getContinueButton = () => this.page.getByTestId('continue-shopping')
    getFirstNameInput = () => this.page.getByTestId('firstName')
    getLastNameInput = () => this.page.getByTestId('lastName')
    getPostalCodeInput = () => this.page.getByTestId('postalCode')
    getCancelButton = () => this.page.getByTestId('cancel')
    getContinueCheckoutButton = () => this.page.getByTestId('continue')
    getErrorMessage = () => this.page.getByTestId('error')
    getCloseErrorButton = () => this.page.getByTestId('error-button')


/////////  ACTIONS //////////   


public async navigateToCart(){
    await this.getShoppingCartLink().click();
    await this.page.waitForURL(/cart.html/);
    
}

public async navigateToCheckout(){
    await this.getCheckoutButton().click();
}

public async fillcheckoutInformation(){
    await this.getFirstNameInput().fill(checkOutData.checkout.firstName);
    await this.getLastNameInput().fill(checkOutData.checkout.lastName);
    await this.getPostalCodeInput().fill(checkOutData.checkout.postalCode);
    await this.getContinueCheckoutButton().click();
    
}

public async fillFirstNameOnly(data: any){
    await this.getFirstNameInput().fill(data);
}

public async fillLastNameOnly(data: any){
    await this.getLastNameInput().fill(data);
}

public async fillPostalCodeOnly(data: any){
    await this.getPostalCodeInput().fill(data);
}

public async clickContinueCheckoutButton(){
    await this.getContinueCheckoutButton().click();}



public async checkoutCancel(){
    await this.getCancelButton().click();
    
}

public async checkoutWithoutInfo(){
    await this.getContinueCheckoutButton().click();
    await expect(this.getErrorMessage()).toBeVisible();
    await this.getCloseErrorButton().click();

 }



}