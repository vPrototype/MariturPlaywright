import { Page, Locator } from "@playwright/test";
import { step } from 'allure-js-commons';

export class Helper {

    private page: Page;

    // Locators
    private emailLoginTextbox: Locator;
    private passwordLoginTextbox: Locator;
    private logginButton: Locator;

    private filterButton: Locator;
    private filterButtonColumn: Locator;

    private filterButtonColumnName: Locator;
    private filterButtonColumnCode: Locator;
    private filterButtonColumnAddress: Locator;

    private filterTextAraeValue: Locator;

    private paginatorElement: Locator;
    private optionButton: Locator;
    private editOptionButton: Locator;

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

    private poupupDisableEnableButonSI: Locator

    constructor(page: Page) {
        this.page = page;

        this.emailLoginTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordLoginTextbox = page.getByRole('textbox', { name: 'Contraseña' });
        this.logginButton = page.getByRole('button', { name: 'Iniciar Sesión' });

        this.filterButton = page.getByRole('button', { name: 'Mostrar filtros' });
        this.filterButtonColumn = page.getByRole('combobox', { name: 'Columnas Nombre' });
        this.filterTextAraeValue = page.getByRole('textbox', { name: 'Valor' });

        this.filterButtonColumnName = page.getByRole('option', { name: 'Nombre' });
        this.filterButtonColumnCode = page.getByRole('option', { name: 'Código' });
        this.filterButtonColumnAddress = page.getByRole('option', { name: 'Dirección' });

        this.optionButton = page.getByRole('menuitem', { name: 'más' });
        this.paginatorElement = page.getByText('1–1 de');
        this.editOptionButton = page.getByRole('menuitem', { name: 'Editar' });

        this.disableOptionButton = page.getByRole('menuitem', { name: 'Desactivar' });
        this.popupDisable = page.getByRole('heading', { name: 'Desactivar usuario' });
        this.disableButton = page.getByRole('button', { name: 'Desactivar' });
        this.poupupDisableEnableButonSI = page.getByRole('button', { name: 'Si' });

        this.enableOptionButton = page.getByRole('menuitem', { name: 'Activar' });
        this.popupEnable = page.getByRole('heading', { name: 'Activar usuario' });
        this.enableButton = page.getByRole('button', { name: 'Activar' });

        this.eliminateOptionButton = page.getByRole('menuitem', { name: 'Eliminar' });
        this.popupEliminate = page.getByRole('heading', { name: 'Eliminar usuario' });
        this.eliminateButton = page.getByRole('button', { name: 'Eliminar' });

        this.toasterInfo = page.getByRole('alert');
    }

    async loginAdmin(emailLogin: string, passwordLogin: string) {
        await step('GIVEN the user is on the login page', async () => {
            await this.emailLoginTextbox.waitFor();
            await this.passwordLoginTextbox.waitFor();
        });

        await step(`WHEN the user fills the email with "${emailLogin}" and password with "${passwordLogin}"`, async () => {
            await this.emailLoginTextbox.fill(emailLogin);
            await this.passwordLoginTextbox.fill(passwordLogin);
        });

        await step('AND the user clicks the "Login" button', async () => {
            await this.logginButton.waitFor();
            await this.logginButton.click();
        });
    }

    async filterValue(filterValue: string) {
        await step('GIVEN the user is on the filter module', async () => {
            await this.filterButton.waitFor();
            await this.filterButton.click();
        });

        await step('WHEN the user selects the "Dirección" column', async () => {
            await this.filterButtonColumn.waitFor();
            await this.filterButtonColumn.click();
            await this.filterButtonColumnAddress.waitFor();
            await this.filterButtonColumnAddress.click();
        });

        await step(`AND the user fills the filter value with "${filterValue}"`, async () => {
            await this.filterTextAraeValue.click();
            await this.filterTextAraeValue.fill(filterValue);
        });
    }

    async editFirstItemFiltered() {
        await step('GIVEN the user has filtered the values', async () => {
            await this.paginatorElement.waitFor({ state: "visible" });
        });

        await step('WHEN the user selects the first filtered value', async () => {
            await this.optionButton.first().click();
        });

        await step('AND the user clicks the "Edit" option', async () => {
            await this.editOptionButton.click();
        });
    }

    async DisableEnableFirstItemFiltered() {
        await step('GIVEN the user has filtered the values', async () => {
            await this.paginatorElement.waitFor({ state: "visible" });
        });

        await step('WHEN the user selects the first item and disables it', async () => {
            await this.optionButton.first().click();
            await this.disableOptionButton.click();
            //await this.popupDisable.waitFor();
            await this.poupupDisableEnableButonSI.click();
            await this.toasterInfo.waitFor();
            console.log('Branch disable successfully!');
        });

        await step('AND the user enables the item again', async () => {
            await this.page.waitForTimeout(5000);
            await this.optionButton.first().click();
            await this.enableOptionButton.click();
            //await this.popupEnable.waitFor();
            await this.poupupDisableEnableButonSI.click();
            await this.toasterInfo.waitFor();
            console.log('Branch enabled successfully!');
        });
    }

    async DeleteFirstItemFiltered() {
        await step('GIVEN the user has filtered the values', async () => {
            await this.paginatorElement.waitFor({ state: "visible" });
        });

        await step('WHEN the user selects the first item', async () => {
            await this.optionButton.first().click();
        });

        await step('AND the user clicks the "Edit" option', async () => {
            await this.eliminateOptionButton.click();
        });

        await step('THEN the user confirms the deletion', async () => {
            await this.eliminateButton.click();
            await this.toasterInfo.waitFor();
            console.log('Branch deleted successfully!');
        });
    }
}
