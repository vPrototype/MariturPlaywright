import { config } from '../config/globalSettings';
import { expect, Page, Locator } from "@playwright/test";
import { HomePage } from '../pageobjects/HomePage';

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
    

    private mariturUser_AddUser: string
    private mariturUser: string
    


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
        

    }

    async addUser(){

        const homePage = new HomePage(this.page)

        await homePage.goToUserModule();
       
        await this.addUserButton.waitFor();
        await this.addUserButton.click();
        await expect(this.page).toHaveURL(this.mariturUser_AddUser);
        await this.addUserTextboxName.click();
        await this.addUserTextboxName.fill('Prueba');
        await this.addUserTextboxSecondName.click();
        await this.addUserTextboxSecondName.fill('Automatizacion');
        await this.addUserTextboxLastname.click();
        await this.addUserTextboxLastname.fill('Playwright');
        await this.addUserTextboxSecondLastname.click();
        await this.addUserTextboxSecondLastname.fill('Automation');
        await this.addUserTextboxEmail.click();
        await this.addUserTextboxEmail.fill('automationPlaywright@demo.com');
        await this.addUserDropdownRole.first().click();
        await this.addUserDropdownRoleAdmin.click();
        await this.addUserComboBoxBranch.click();
        await this.addUserComboBoxBranchOption.click();
        await this.addUserComboBoxConcessionaire.click();
        await this.addUserComboBoxConcessionaireOption.click();
        await this.addUserSaveButton.click();
        await expect(this.page).toHaveURL(this.mariturUser);

    }
}