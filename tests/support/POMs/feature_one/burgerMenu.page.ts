import {Page, Locator} from '@playwright/test';

export class BurgerMenu {
    constructor(private page: Page) {}

    //////////  LOCATORS ////////// 

    getBurgerMenuButton = () => this.page.locator('#react-burger-menu-btn');
    getAnySidebarLink = (linkName: string) => this.page.getByTestId(`${linkName}-sidebar-link`);
    public async getLinkOption(linkName: 'inventory'|'about' |'logout' | 'reset') {
        return this.getAnySidebarLink(linkName)
    }



////////  ACTIONS //////////

public async openBurgerMenu(){
    await this.getBurgerMenuButton().click();
}

public async clickSidebarLink(linkName: 'inventory'|'about' |'logout' | 'reset'){
    await this.getBurgerMenuButton().click();
    await this.getAnySidebarLink(linkName).click();
}





}










