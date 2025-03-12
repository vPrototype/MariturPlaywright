import { config } from '../config/globalSettings';
import { test, expect, Page, Locator } from "@playwright/test";
import { HomePage } from '../pageobjects/HomePage';
import { Helper } from '../utils/Helpers';
import { faker } from '@faker-js/faker';
import { step } from 'allure-js-commons';



export class BranchPage{

    //Localizadores
    private addBranchButton: Locator


    private mariturBranch: string
    private mariturBranch_AddBranch: string
    private branchCountryMX: string
    private filterDataOption: string

    private branchTextBoxName: Locator
    private branchTextBoxCodeBranch: Locator
    private branchTextBoxAddress: Locator
    private branchTextBoxPostalCode: Locator
    private branchTextBoxCity: Locator
    private branchTextBoxMunicipality: Locator
    private branchTextBoxState: Locator
    private branchDropDownCountry: Locator
    private branchDropDownCountryMexicoOption: Locator
    private branchButtonCreate: Locator
    private branchButtonUpdate: Locator
    private branchFilterButton: Locator
    

    private firstName: string | undefined
    private secondName: string | undefined
    private lastName: string | undefined
    private secondLastName: string | undefined
    private email: string | undefined


    constructor (private readonly page:Page){

        this.mariturBranch = config.urls.branchModuleUrl;
        this.mariturBranch_AddBranch = config.urls.branchModuleAddBranchUrl;

        this.addBranchButton = page.getByRole('button', { name: 'Agregar sucursal' });

        this.branchTextBoxName = page.getByRole('textbox', { name: 'Nombre' });
        this.branchTextBoxCodeBranch = page.getByRole('textbox', { name: 'Código de sucursal' });
        this.branchTextBoxAddress = page.getByRole('textbox', { name: 'Dirección' });
        this.branchTextBoxPostalCode = page.getByRole('textbox', { name: 'Código postal' });
        this.branchTextBoxCity = page.getByRole('textbox', { name: 'Ciudad' });
        this.branchTextBoxMunicipality = page.getByRole('textbox', { name: 'Municipio' });
        this.branchTextBoxState = page.getByRole('textbox', { name: 'Estado' });
        this.branchDropDownCountry = page.getByRole('combobox', { name: 'País' });
        this.branchDropDownCountryMexicoOption = page.getByRole('option', { name: 'Mexico' });
        this.branchCountryMX = 'Mexico'
        this.filterDataOption = 'luxecita'
        this.branchButtonCreate = page.getByRole('button', { name: 'Agregar' });
        this.branchFilterButton = page.getByRole('button', { name: 'Mostrar filtros' });
        this.branchButtonUpdate = page.getByRole('button', { name: 'Actualizar' });


    }

    async addBranch() {  

        this.firstName = faker.person.firstName();
        this.secondName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.secondLastName = faker.person.lastName();
        this.email = faker.internet.email({ firstName: this.firstName, lastName: this.lastName, provider: 'luxecita.com' });

        const homePage = new HomePage(this.page)

        await step('GIVEN the user is on the branch module page', async () => {
            await homePage.goToBranchModule();
        });
    
        await step('WHEN the user clicks on the "Add Branch" button', async () => {
            await this.addBranchButton.waitFor();
            await this.addBranchButton.click();
        });
    
        await step('THEN the user should be redirected to the "Add Branch" form', async () => {
            await expect(this.page).toHaveURL(this.mariturBranch_AddBranch);
        });
    
        await step('AND the user fills out the new branch form with valid data', async () => {
            await this.branchTextBoxName.fill(this.firstName!);
            await this.branchTextBoxCodeBranch.fill(this.secondName!);
            await this.branchTextBoxAddress.fill(this.email!);
            await this.branchTextBoxMunicipality.fill(this.lastName!);
            await this.branchTextBoxState.fill(this.secondLastName!);
            await this.branchTextBoxPostalCode.fill(this.firstName!);
            await this.branchTextBoxCity.fill(this.secondName!);
            await this.branchDropDownCountry.fill(this.branchCountryMX);
            await this.branchDropDownCountryMexicoOption.click();
        });
    
        await step('AND the user clicks the "Create Branch" button', async () => {
            await this.branchButtonCreate.click();
        });
    
        await step('THEN the user should be redirected to the branch listing page', async () => {
            await expect(this.page).toHaveURL(this.mariturBranch);
        });
    }

    async editBranch() {  
        this.firstName = faker.person.firstName();
        this.secondName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.secondLastName = faker.person.lastName();
        this.email = faker.internet.email({ firstName: this.firstName, lastName: this.lastName, provider: 'luxecita.com' });
        
        const homePage = new HomePage(this.page);

        await step('GIVEN the user is on the branch module page', async () => {
            await homePage.goToBranchModule();
        });

        await step('AND the user fill out the filter and edit the branch', async () => {
            const helper = new Helper(this.page)
            await helper.filterValue(this.filterDataOption);
            await helper.selectFirstItemFiltered();
        });
    
        await step('THEN the user should be redirected to the "Add Branch" form', async () => {
            await expect(this.page).toHaveURL(/\/editar/);
        });
    
        await step('AND the user edit the branch form with valid data', async () => {
            await this.branchTextBoxName.clear();
            await this.branchTextBoxName.fill(this.firstName!);
            await this.branchTextBoxCodeBranch.clear();
            await this.branchTextBoxCodeBranch.fill(this.secondName!);
            await this.branchTextBoxAddress.clear();
            await this.branchTextBoxAddress.fill(this.email!);
            await this.branchTextBoxMunicipality.clear();
            await this.branchTextBoxMunicipality.fill(this.lastName!);
            await this.branchTextBoxState.clear();
            await this.branchTextBoxState.fill(this.secondLastName!);
            await this.branchDropDownCountry.clear();
            await this.branchDropDownCountry.fill(this.branchCountryMX);
            await this.branchDropDownCountryMexicoOption.click();
        });
    
        await step('AND the user clicks the "Edit Branch" button', async () => {
            await this.branchButtonUpdate.click();
        });
    
        await step('THEN the user should be redirected to the branch listing page', async () => {
            await expect(this.page).toHaveURL(this.mariturBranch);
        });
    }



}