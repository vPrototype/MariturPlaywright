import { test } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { config } from '../config/globalSettings';


test.beforeEach(async ({ page }) => {

  const maritur_Home = config.urls.Home_Url;

  await page.goto(maritur_Home);
});

test.skip('loginTest', async ({ page }) => {
 
  const adminEmail = config.credentials.adminUser;
  const adminPassword = config.credentials.adminPass;
  
  const loginPage = new LoginPage(page)
  
  await loginPage.loginEmailAndPassword(adminEmail, adminPassword);
  await loginPage.checkSuccessfulLogin();

});

