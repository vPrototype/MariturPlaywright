import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { AdminUser } from '../fixture/testData.json';
import { Enviroments } from "../fixture/testData.json"
import { HomePage } from '../pageobjects/HomePage';


test.beforeEach(async ({ page }) => {
  
  const helper = new Helper(page)
  await page.goto(Enviroments.dev);
  await helper.loginAdmin(AdminUser.username,AdminUser.password);
});

test('accessItineraryModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToItineraryModule();
  
});

test('accessUserModuleTest', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.goToUserModule();
  
});

