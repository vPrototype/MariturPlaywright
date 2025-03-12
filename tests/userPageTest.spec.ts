import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { UserPage } from '../pageobjects/UserPage';
import { config } from '../config/globalSettings';


test.beforeEach(async ({ page }) => {
  
  const matiturHome = config.urls.Home_Url;
  const adminEmail = config.credentials.adminUser;
  const adminPassword = config.credentials.adminPass;


  const helper = new Helper(page)

  await page.goto(matiturHome);
  await helper.loginAdmin(adminEmail,adminPassword)
});


test.describe.serial('User Module - Test execution schedule', () => {

  test('Create User test', async ({ page }) => {

    const userPage = new UserPage(page)
    await userPage.addUser();

  });

  test('Edit User test', async ({ page }) => {

    const userPage = new UserPage(page)

    await userPage.editUser();

  });

  test('Edit Permissions User test', async ({ page }) => {

    const userPage = new UserPage(page)
    await userPage.editUserPermissions();

  });

  test('Disable/Enable User test', async ({ page }) => {

    const userPage = new UserPage(page)
    await userPage.disableEnableUser();

  });

  test('Delete User test', async ({ page }) => {

    const userPage = new UserPage(page)
    await userPage.deleteUser();

  });

});
