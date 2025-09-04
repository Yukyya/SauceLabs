import {   Page, Locator } from '@playwright/test';
import { mockTestData } from '../../utils/mock-test-data';


export class LoginPage {
  constructor(private page: Page) {}



  //////////  LOCATORS //////////
  
getUsernameInput = () => this.page.getByTestId('username')
getPasswordInput = () => this.page.getByTestId('password')
getLoginButton = () => this.page.getByTestId('login-button')
getErrorMessage = () => this.page.getByTestId('error')

/////////  ACTIONS //////////

public async loginUser() {
    await this.getUsernameInput().fill(mockTestData.auth.login.username);
    await this.getPasswordInput().fill(mockTestData.auth.login.password);
    await this.getLoginButton().click();
    
}

public async loginInvalidUser() {
    await this.getUsernameInput().fill('black');
    await this.getPasswordInput().fill('hat');
    await this.getLoginButton().click();

}}

  