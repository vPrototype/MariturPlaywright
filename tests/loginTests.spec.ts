import { test } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { AdminUser } from '../fixture/testData.json';

test.beforeEach(async ({ page }) => {
  await page.goto('https://mariturwebapp.azurewebsites.net');
});

test('loginTest', async ({ page }) => {
 
  const loginPage = new LoginPage(page)
  
  await loginPage.loginEmailAndPassword(AdminUser.username, AdminUser.password);
  await loginPage.checkSuccessfulLogin();

});

