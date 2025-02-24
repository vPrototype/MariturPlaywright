import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { HomePage } from '../pageobjects/HomePage';
import { config } from '../config/globalSettings';


test.beforeEach(async ({ page }) => {
  
  const maritur = config.urls.Home_Url;
  const adminEmail = config.credentials.adminUser;
  const adminPassword = config.credentials.adminPass;

  const helper = new Helper(page)

  await page.goto(maritur);
  await helper.loginAdmin(adminEmail,adminPassword)
  await page.waitForLoadState('networkidle');
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

test('accessServiceModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToServiceModule();
  
});

test('accessDocumentModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToDocumentModule();
  
});

test('accessRoleModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToRoleModule();
  
});

test('accessSupplierModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToSupplierModule();
  
});

test('accessBankAccountModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToBankAccountModule();
  
});

test('accessConcessionaireModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToConcessionaireModule();
  
});

test('accessClientModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToClientModule();
  
});

test('accessHotelModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToHotelModule();
  
});

test('accessConfigModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToConfigModule();
  
});