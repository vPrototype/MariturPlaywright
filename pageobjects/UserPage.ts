import { config } from '../config/globalSettings';
import { expect, Page, Locator } from "@playwright/test";
import { HomePage } from '../pageobjects/HomePage';
import { faker } from '@faker-js/faker';
import { step } from "allure-js-commons";



export class UserPage{

    //Localizadores
    private addUserButton: Locator

    private addUserTextboxName: Locator
    private addUserTextboxSecondName: Locator
    private addUserTextboxLastname: Locator
    private addUserTextboxSecondLastname: Locator
    private addUserTextboxEmail: Locator
    private addUserDropdownRole: Locator
    private addUserDropdownRoleAdmin: Locator
    private addUserComboBoxBranch: Locator
    private addUserComboBoxBranchOption: Locator
    private addUserComboBoxConcessionaire: Locator
    private addUserComboBoxConcessionaireOption: Locator
    private addUserSaveButton: Locator
    
    private editUserUpdateButton: Locator
    private addUserShowFilterButon: Locator
    private addUserShowFilterComboBox: Locator
    private addUserShowFilterComboBoxOption: Locator
    private addUserShowFilterComboBoxAddTextArea: Locator
    private addUserOptionButtonUser: Locator
    private addUserOptionButtonUserEditOption: Locator
    private addUserOptionButtonPermissionEditOption: Locator
    private addUserPaginator: Locator

    private editPermissionsUncheckConcessionaireA: Locator
    private editPermissionsUncheckConcessionaireB: Locator
    private editPermissionsUncheckConcessionaireC: Locator
    private editPermissionsUncheckConcessionaireD: Locator
    private editPermissionsUpdateButton: Locator

    private disableOptionButton: Locator
    private disableButton: Locator
    private enableOptionButton: Locator
    private enableButton: Locator
    private popupDisable: Locator
    private popupEnable: Locator
    private toasterInfo: Locator

    private eliminateOptionButton: Locator
    private popupEliminate: Locator
    private eliminateButton: Locator

    private mariturUser_AddUser: string
    private mariturUser: string
    
    public firstName: string | undefined
    private secondName: string | undefined
    private lastName: string | undefined
    private secondLastName: string | undefined
    private email: string | undefined


    constructor (private readonly page:Page){

        this.mariturUser_AddUser = config.urls.userModuleAddUserUrl;
        this.mariturUser = config.urls.userModuleUrl;

        this.addUserButton = page.getByRole('button', { name: 'Agregar Usuario' });
        this.addUserTextboxName = page.getByRole('textbox', { name: 'Nombre', exact: true });
        this.addUserTextboxSecondName = page.getByRole('textbox', { name: 'Segundo Nombre' });
        this.addUserTextboxLastname = page.getByRole('textbox', { name: 'Primer Apellido' });
        this.addUserTextboxSecondLastname = page.getByRole('textbox', { name: 'Segundo Apellido' });
        this.addUserTextboxEmail = page.getByRole('textbox', { name: 'Email' });
        this.addUserDropdownRole = page.locator('.MuiGrid2-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root');
        this.addUserDropdownRoleAdmin = page.locator('xpath=//*[@id="roles-option-0"]/span/input');
        this.addUserComboBoxBranch = page.locator('div:nth-child(7) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root');
        this.addUserComboBoxBranchOption = page.getByRole('option', { name: 'Mérida', exact: true });
        this.addUserComboBoxConcessionaire = page.locator('div:nth-child(8) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root');
        this.addUserComboBoxConcessionaireOption = page.getByRole('option', { name: 'Hotel Flamingo Mérida' });
        this.addUserSaveButton = page.getByRole('button', { name: 'Agregar' });

        this.addUserShowFilterButon = page.getByRole('button', { name: 'Mostrar filtros' });
        this.addUserShowFilterComboBox = page.getByRole('combobox', { name: 'Columnas Id' });
        this.addUserShowFilterComboBoxOption = page.getByRole('option', { name: 'Email' });
        this.addUserShowFilterComboBoxAddTextArea = page.getByRole('textbox', { name: 'Valor' });
        this.addUserOptionButtonUser = page.getByRole('menuitem', { name: 'más' });
        this.addUserOptionButtonUserEditOption =  page.getByRole('menuitem', { name: 'Editar', exact: true });
        this.addUserPaginator = page.getByText('1–1 de');
        this.editUserUpdateButton = page.getByRole('button', { name: 'Actualizar' });
        this.addUserOptionButtonPermissionEditOption = page.getByRole('menuitem', { name: 'Editar Permisos' });

        this.editPermissionsUncheckConcessionaireA = page.getByRole('checkbox', { name: 'Crear Concesión' });
        this.editPermissionsUncheckConcessionaireB = page.getByRole('checkbox', { name: 'Borrar Concesión' });
        this.editPermissionsUncheckConcessionaireC = page.getByRole('checkbox', { name: 'Ver Concesión' });
        this.editPermissionsUncheckConcessionaireD = page.getByRole('checkbox', { name: 'Actualizar Concesión' });
        this.editPermissionsUpdateButton = page.getByRole('button', { name: 'Actualizar' });

        this.disableOptionButton = page.getByRole('menuitem', { name: 'Desactivar' });
        this.popupDisable = page.getByRole('heading', { name: 'Desactivar usuario' });
        this.disableButton = page.getByRole('button', { name: 'Desactivar' });
        
        this.enableOptionButton = page.getByRole('menuitem', { name: 'Activar' })
        this.popupEnable = page.getByRole('heading', { name: 'Activar usuario' });
        this.enableButton = page.getByRole('button', { name: 'Activar' });
        
        this.eliminateOptionButton = page.getByRole('menuitem', { name: 'Eliminar' });
        this.popupEliminate = page.getByRole('heading', { name: 'Eliminar usuario' });
        this.eliminateButton = page.getByRole('button', { name: 'Eliminar' });

        this.toasterInfo = page.getByRole('alert');


    }


    async addUser() {  
        this.firstName = faker.person.firstName();
        this.secondName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.secondLastName = faker.person.lastName();
        this.email = faker.internet.email({ firstName: this.firstName, lastName: this.lastName, provider: 'luxecita.com' });

        const homePage = new HomePage(this.page);

        await step('GIVEN I am on the user module page', async () => {
            await homePage.goToUserModule();
        });

        await step('WHEN I click on the "Agregar Usuario" button', async () => {
            await this.addUserButton.waitFor();
            await this.addUserButton.click();
        });

        await step('THEN I should see the add user form', async () => {
            await expect(this.page).toHaveURL(this.mariturUser_AddUser);
        });

        await step('AND I fill the user details', async () => {
            await this.addUserTextboxName.fill(this.firstName!);
            await this.addUserTextboxSecondName.fill(this.secondName!);
            await this.addUserTextboxLastname.fill(this.lastName!);
            await this.addUserTextboxSecondLastname.fill(this.secondLastName!);
            await this.addUserTextboxEmail.fill(this.email!);
        });

        await step('AND I select the role, branch, and concessionaire', async () => {
            await this.addUserDropdownRole.first().click();
            await this.addUserDropdownRoleAdmin.click();
            await this.addUserComboBoxBranch.click();
            await this.addUserComboBoxBranchOption.click();
            await this.addUserComboBoxConcessionaire.click();
            await this.addUserComboBoxConcessionaireOption.click();
        });

        await step('WHEN I click on the "Agregar" button', async () => {
            await this.addUserSaveButton.click();
        });

        await step('THEN I should be redirected to the user module page', async () => {
            await expect(this.page).toHaveURL(this.mariturUser);
        });

        await step('AND I should see a success message', async () => {
            await this.toasterInfo.waitFor();
            const message = await this.toasterInfo.innerText();
            console.log('Success message:', message);
        });
    }


    async editUser() {
        this.firstName = faker.person.firstName();
        this.secondName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.secondLastName = faker.person.lastName();
    
        const homePage = new HomePage(this.page);
    
        await step('GIVEN I am on the user module page', async () => {
            await homePage.goToUserModule();
        });
    
        await step('WHEN I search for a user by email', async () => {
            await this.addUserShowFilterButon.click();
            await this.addUserShowFilterComboBox.click();
            await this.addUserShowFilterComboBoxOption.click();
            await this.addUserShowFilterComboBoxAddTextArea.fill('Luxecita');
        });
    
        await step('AND I open the edit option', async () => {
            await this.addUserPaginator.waitFor();
            await this.addUserOptionButtonUser.first().click();
            await this.addUserOptionButtonUserEditOption.click();
        });
    
        await step('THEN I should see the edit user form', async () => {
            await expect(this.page).toHaveURL(/\/editar/);
        });
    
        await step('WHEN I update the user details', async () => {
            await this.addUserTextboxName.fill(this.firstName!);
            await this.addUserTextboxSecondName.fill(this.secondName!);
            await this.addUserTextboxLastname.fill(this.lastName!);
            await this.addUserTextboxSecondLastname.fill(this.secondLastName!);
        });
    
        await step('AND I save the changes', async () => {
            await this.editUserUpdateButton.click();
        });
    
        await step('THEN I should be redirected to the user module page', async () => {
            await expect(this.page).toHaveURL(this.mariturUser);
        });
    }
    

    async editUserPermissions() {
        const homePage = new HomePage(this.page);
    
        await step('GIVEN I am on the user module page', async () => {
            await homePage.goToUserModule();
        });
    
        await step('WHEN I search for a user by email', async () => {
            await this.addUserShowFilterButon.click();
            await this.addUserShowFilterComboBox.click();
            await this.addUserShowFilterComboBoxOption.click();
            await this.addUserShowFilterComboBoxAddTextArea.fill('Luxecita');
        });
    
        await step('AND I open the edit permissions option', async () => {
            await this.addUserPaginator.waitFor();
            await this.addUserOptionButtonUser.first().click();
            await this.addUserOptionButtonPermissionEditOption.click();
        });
    
        await step('THEN I should see the permissions form', async () => {
            await expect(this.page).toHaveURL(/\/permisos/);
        });
    
        await step('WHEN I update the permissions', async () => {
            await this.editPermissionsUncheckConcessionaireA.uncheck();
            await this.editPermissionsUncheckConcessionaireB.uncheck();
            await this.editPermissionsUncheckConcessionaireC.uncheck();
            await this.editPermissionsUncheckConcessionaireD.uncheck();
            await this.editPermissionsUncheckConcessionaireA.check();
            await this.editPermissionsUncheckConcessionaireC.check();
        });
    
        await step('AND I save the permissions', async () => {
            await this.editPermissionsUpdateButton.click();
        });
    
        await step('THEN I should be redirected to the user module page', async () => {
            await expect(this.page).toHaveURL(this.mariturUser);
        });
    }
    

    async disableEnableUser() {
        const homePage = new HomePage(this.page);
    
        await step('GIVEN I am on the user module page', async () => {
            await homePage.goToUserModule();
        });
    
        await step('WHEN I apply a filter to find the user "Luxecita"', async () => {
            await this.addUserShowFilterButon.waitFor();
            await this.addUserShowFilterButon.click();
            await this.addUserShowFilterComboBox.click();
            await this.addUserShowFilterComboBoxOption.click();
            await this.addUserShowFilterComboBoxAddTextArea.click();
            await this.addUserShowFilterComboBoxAddTextArea.fill('Luxecita');
            await this.addUserPaginator.waitFor({ state: "visible" });
        });
    
        await step('AND I select the user from the list', async () => {
            await this.addUserOptionButtonUser.first().click();
        });
    
        await step('WHEN I click on the "Desactivar" button', async () => {
            await this.disableOptionButton.click();
        });
    
        await step('THEN a confirmation popup should appear', async () => {
            await this.popupDisable.waitFor();
        });
    
        await step('WHEN I confirm the deactivation', async () => {
            await this.disableButton.click();
            await this.toasterInfo.waitFor();
            await this.page.waitForTimeout(5000);
        });
    
        await step('AND I enable the user again', async () => {
            await this.enableOptionButton.click();
            await this.popupEnable.waitFor();
            await this.enableButton.click();
            await this.toasterInfo.waitFor();
        });
    
        await step('THEN the user should be successfully enabled', async () => {
            console.log('User enabled successfully!');
        });
    }

    async deleteUser() {
        const homePage = new HomePage(this.page);
    
        await step('GIVEN I am on the user module page', async () => {
            await homePage.goToUserModule();
        });
    
        await step('WHEN I search for a user by email', async () => {
            await this.addUserShowFilterButon.click();
            await this.addUserShowFilterComboBox.click();
            await this.addUserShowFilterComboBoxOption.click();
            await this.addUserShowFilterComboBoxAddTextArea.fill('Luxecita');
        });
    
        await step('AND I select the delete option', async () => {
            await this.addUserPaginator.waitFor();
            await this.addUserOptionButtonUser.first().click();
            await this.eliminateOptionButton.click();
        });
    
        await step('THEN I should see a confirmation popup', async () => {
            await this.popupEliminate.waitFor();
        });
    
        await step('WHEN I confirm the deletion', async () => {
            await this.eliminateButton.click();
        });
    
        await step('THEN I should see a success message', async () => {
            await this.toasterInfo.waitFor();
        });
    }
    
}