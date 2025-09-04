import {test, expect} from "@playwright/test";
import { LoginPage } from "../POMs/feature_one/login.page";


test('authenticate', async ({ page, }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/')
    await loginPage.loginUser();
    await expect(page).toHaveURL(/.*inventory.html/)
    await page.context().storageState({ path: 'state.json' });



});