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

test.describe('Access to ADMON Modules',() => {

  test('Access ITINERARIES module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToItineraryModule();
    
  });
  
  test('Access USER module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToUserModule();
    
  });
  
  test('Access BRANCH module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToBranchModule();
    
  });
  
  test('Access SERVICE module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToServiceModule();
    
  });
  
  test('Access DOCUMENT module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToDocumentModule();
    
  });
  
  test('Access ROLE module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToRoleModule();
    
  });
  
  test('Access SUPPLIER module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToSupplierModule();
    
  });
  
  test('Access BANK ACCOUNT module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToBankAccountModule();
    
  });
  
  test('Access CONCESSIONAIRE module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToConcessionaireModule();
    
  });
  
  test('Access CLIENT module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToClientModule();
    
  });
  
  test('Access HOTEL module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToHotelModule();
    
  });
  
  test('Access CONFIG module', async ({ page }) => {
  
    const homePage = new HomePage(page)
    await homePage.goToConfigModule();
    
  });

})