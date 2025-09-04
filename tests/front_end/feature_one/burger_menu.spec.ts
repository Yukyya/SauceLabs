import { test, expect } from '@playwright/test';
import { BurgerMenu as BurgerMenuPage } from '../../support/POMs/feature_one/burgerMenu.page';


test.describe('Burger Menu Options', () => {
  let burgerMenu: BurgerMenuPage;

  test.beforeEach(async ({ page, }) => {
    await page.goto('/inventory.html');
    burgerMenu = new BurgerMenuPage(page);
  });

  test('should open burger menu', async ({ page }) => {
    
    await burgerMenu.openBurgerMenu();
    await expect(page.getByTestId('inventory-sidebar-link')).toBeVisible();
  });

  test('should navigate to Inventory', async ({ page }) => {
    await burgerMenu.clickSidebarLink('inventory');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('should navigate to About page', async ({ page, baseURL }) => {
    await burgerMenu.clickSidebarLink('about');
    // await expect(page).not.toHaveURL(baseURL!);
    await expect(page).toHaveURL('https://saucelabs.com/');



  });

  test('should logout successfully', async ({ page }) => {
    await burgerMenu.clickSidebarLink('logout');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  });

  test('should reset app state', async ({ page }) => {
    await burgerMenu.clickSidebarLink('reset');
    
    
  });
});
