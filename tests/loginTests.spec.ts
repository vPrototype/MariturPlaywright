import { test } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';


test.beforeEach(async ({ page }) => {

  const mariturDEV = process.env.DEV_MARITUR_HOME_MODULE!;

  await page.goto(mariturDEV);
});

test('loginTest', async ({ page }) => {
 
  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPassword = process.env.ADMIN_PASSWORD!;
  
  const loginPage = new LoginPage(page)
  
  await loginPage.loginEmailAndPassword(adminEmail, adminPassword);
  await loginPage.checkSuccessfulLogin();

});

