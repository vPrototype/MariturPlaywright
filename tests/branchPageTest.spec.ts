import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { BranchPage } from '../pageobjects/BranchPage';
import { config } from '../config/globalSettings';


test.beforeEach(async ({ page }) => {
  
  const matiturHome = config.urls.Home_Url;
  const adminEmail = config.credentials.adminUser;
  const adminPassword = config.credentials.adminPass;


  const helper = new Helper(page)

  await page.goto(matiturHome);
  await helper.loginAdmin(adminEmail,adminPassword)
  await page.waitForLoadState('networkidle');
  
});

test.describe.serial('Branch Module - Test execution schedule',() => {

  test('Create a new branch', async ({ page }) => {
  
    const branchPage = new BranchPage(page)
    await branchPage.addBranch();
    
  })

  test('Edit an existing branch', async ({ page }) => {
  
    const branchPage = new BranchPage(page)
    await branchPage.editBranch();
    
  })

  test('Disable/Enable an existing branch', async ({ page }) => {
  
    const branchPage = new BranchPage(page)
    await branchPage.disableEnableBranch();
    
  })

  test('Delete an existing branch', async ({ page }) => {
  
    const branchPage = new BranchPage(page)
    await branchPage.deleteBranch();
    
  })

})