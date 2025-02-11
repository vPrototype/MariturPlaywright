import { test } from '@playwright/test';
import { LoginPage } from '../pageobjects/loginPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://mariturwebapp.azurewebsites.net');
});

test('loginTest', async ({ page }) => {
 
  const loginPage = new LoginPage(page)
  
  loginPage.loginEmailAndPassword('ivan.perez@cancunit.com','Dotnet_1')
  await page.waitForTimeout(6000);
  loginPage.checkSuccessfulLogin();

});

