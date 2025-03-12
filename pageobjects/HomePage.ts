import { config } from '../config/globalSettings';
import { expect, Page, Locator } from "@playwright/test";
import { step } from "allure-js-commons";

export class HomePage {

    // Aquí van los locators ↓
    private itineraryModule: Locator;
    private userModule: Locator;
    private branchModule: Locator;
    private serviceModule: Locator;
    private documentModule: Locator;
    private roleModule: Locator;
    private supplierModule: Locator;
    private bankAccountModule: Locator;
    private concessionaireModule: Locator;
    private clientModule: Locator;
    private hotelModule: Locator;
    private configModule: Locator;

    // Aquí van las variables que serán llamadas desde el global
    private mariturItinerary: string;
    private mariturUser: string;
    private mariturBranch: string;
    private mariturService: string;
    private mariturDocument: string;
    private mariturRole: string;
    private mariturSupplier: string;
    private mariturBankAccount: string;
    private mariturConcessionaire: string;
    private mariturClient: string;
    private mariturHotel: string;
    private mariturConfig: string;

    constructor(private readonly page: Page) {
        // Llamando desde el globalSettings
        this.mariturItinerary = config.urls.itineraryModuleUrl;
        this.mariturUser = config.urls.userModuleUrl;
        this.mariturBranch = config.urls.branchModuleUrl;
        this.mariturService = config.urls.serviceModuleUrl;
        this.mariturDocument = config.urls.documentModuleUrl;
        this.mariturRole = config.urls.roleModuleUrl;
        this.mariturSupplier = config.urls.supplierModuleUrl;
        this.mariturBankAccount = config.urls.bankAccountModuleUrl;
        this.mariturConcessionaire = config.urls.concessionaireModuleUrl;
        this.mariturClient = config.urls.clientModuleUrl;
        this.mariturHotel = config.urls.hotelModuleUrl;
        this.mariturConfig = config.urls.configModuleUrl;

        // Inicialización de los locators
        this.itineraryModule = page.getByRole('link', { name: 'Itinerario' });
        this.userModule = page.getByRole('link', { name: 'Usuarios' });
        this.branchModule = page.getByRole('link', { name: 'Sucursales' });
        this.serviceModule = page.getByRole('link', { name: 'Servicios' });
        this.documentModule = page.getByRole('link', { name: 'Documentos' });
        this.roleModule = page.getByRole('link', { name: 'Roles' });
        this.supplierModule = page.getByRole('link', { name: 'Proveedores' });
        this.bankAccountModule = page.getByRole('link', { name: 'Cuentas de Banco' });
        this.concessionaireModule = page.getByRole('link', { name: 'Concesiones' });
        this.clientModule = page.getByRole('link', { name: 'Clientes' });
        this.hotelModule = page.getByRole('link', { name: 'Hoteles' });
        this.configModule = page.getByRole('link', { name: 'Configuración' });
    }

    // Interacción con los elementos ↓
    async goToItineraryModule() {
        await step('GIVEN I am on the itinerary module page', async () => {
            await this.itineraryModule.waitFor();
            await this.itineraryModule.click();
            await expect(this.page).toHaveURL(this.mariturItinerary);
        });
    }

    async goToUserModule() {
        await step('GIVEN I am on the user module page', async () => {
            await this.userModule.waitFor();
            await this.userModule.click();
            await expect(this.page).toHaveURL(this.mariturUser);
        });
    }

    async goToBranchModule() {
        await step('GIVEN I am on the branch module page', async () => {
            await this.branchModule.waitFor();
            await this.branchModule.click();
            await expect(this.page).toHaveURL(this.mariturBranch);
        });
    }

    async goToServiceModule() {
        await step('GIVEN I am on the service module page', async () => {
            await this.serviceModule.waitFor();
            await this.serviceModule.click();
            await expect(this.page).toHaveURL(this.mariturService);
        });
    }

    async goToDocumentModule() {
        await step('GIVEN I am on the document module page', async () => {
            await this.documentModule.waitFor();
            await this.documentModule.click();
            await expect(this.page).toHaveURL(this.mariturDocument);
        });
    }

    async goToRoleModule() {
        await step('GIVEN I am on the role module page', async () => {
            await this.roleModule.waitFor();
            await this.roleModule.click();
            await expect(this.page).toHaveURL(this.mariturRole);
        });
    }

    async goToSupplierModule() {
        await step('GIVEN I am on the supplier module page', async () => {
            await this.supplierModule.waitFor();
            await this.supplierModule.click();
            await expect(this.page).toHaveURL(this.mariturSupplier);
        });
    }

    async goToBankAccountModule() {
        await step('GIVEN I am on the bank account module page', async () => {
            await this.bankAccountModule.waitFor();
            await this.bankAccountModule.click();
            await expect(this.page).toHaveURL(this.mariturBankAccount);
        });
    }

    async goToConcessionaireModule() {
        await step('GIVEN I am on the concessionaire module page', async () => {
            await this.concessionaireModule.waitFor();
            await this.concessionaireModule.click();
            await expect(this.page).toHaveURL(this.mariturConcessionaire);
        });
    }

    async goToClientModule() {
        await step('GIVEN I am on the client module page', async () => {
            await this.clientModule.waitFor();
            await this.clientModule.click();
            await expect(this.page).toHaveURL(this.mariturClient);
        });
    }

    async goToHotelModule() {
        await step('GIVEN I am on the hotel module page', async () => {
            await this.hotelModule.waitFor();
            await this.hotelModule.click();
            await expect(this.page).toHaveURL(this.mariturHotel);
        });
    }

    async goToConfigModule() {
        await step('GIVEN I am on the config module page', async () => {
            await this.configModule.waitFor();
            await this.configModule.click();
            await expect(this.page).toHaveURL(this.mariturConfig);
        });
    }
}
