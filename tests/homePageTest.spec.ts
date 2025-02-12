import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { HomePage } from '../pageobjects/HomePage';


test.beforeEach(async ({ page }) => {
  
  const mariturDEV = process.env.DEV_MARITUR_HOME_MODULE!;
  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPassword = process.env.ADMIN_PASSWORD!;


  const helper = new Helper(page)

  await page.goto(mariturDEV);
  await helper.loginAdmin(adminEmail,adminPassword)
});

test('accessItineraryModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToItineraryModule();
  
});

test('accessUserModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToUserModule();
  
});

test('accessBranchModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToBranchModule();
  
});

