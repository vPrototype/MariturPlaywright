import { Page, Locator } from "@playwright/test";

export class Helper {

    private page: Page;

    // Aquí van los locators ↓
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

    constructor(page:Page) {

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
    }

    async loginAdmin(emailLogin: string, passwordLogin: string) {
        await this.emailLoginTextbox.waitFor();
        await this.emailLoginTextbox.fill(emailLogin);
        await this.passwordLoginTextbox.waitFor();
        await this.passwordLoginTextbox.fill(passwordLogin);
        await this.logginButton.waitFor();
        await this.logginButton.click();
    }

    async filterValue(filterValue: string) {
        await this.filterButton.waitFor();
        await this.filterButton.click();
        await this.filterButtonColumn.waitFor();
        await this.filterButtonColumn.click();
        await this.filterButtonColumnAddress.waitFor();
        await this.filterButtonColumnAddress.click();
        await this.filterTextAraeValue.click();
        await this.filterTextAraeValue.fill(filterValue);
    }

    async selectFirstItemFiltered() {
        await this.paginatorElement.waitFor({ state: "visible" });
        await this.optionButton.first().click();
        await this.editOptionButton.click();
    }
}
