import { expect, Page, Locator } from "@playwright/test";


export class HomePage {

    // Aquí van los locators ↓
    private itineraryModule: Locator;
    private itineraryModuleUrl: string;

    private userModule: Locator
    private userModuleUrl: string;

    private branchModule: Locator
    private branchModuleUrl: string

    private serviceModule: Locator
    private serviceModuleUrl: string

    private documentModule: Locator
    private documentModuleUrl: string

    private roleModule: Locator
    private roleModuleUrl: string

    private supplierModule: Locator
    private supplierModuleUrl: string

    private bankAccountModule: Locator
    private bankAccountModuleUrl: string

    private concessionaireModule: Locator
    private concessionaireModuleUrl: string

    private clientModule: Locator
    private clientModuleUrl: string

    private hotelModule: Locator
    private hotelModuleUrl: string
    
    private configModule: Locator
    private configModuleUrl: string
    

    constructor(private readonly page: Page) {

        const mariturDevItinerary = process.env.DEV_MARITUR_ITINERARY_MODULE!;
        const mariturDevUser = process.env.DEV_MARITUR_USER_MODULE!;
        const mariturDevBranch = process.env.DEV_MARITUR_BRANCH_MODULE!;
        const mariturDevService = process.env.DEV_MARITUR_SERVICE_MODULE!;
        const mariturDevDocument = process.env.DEV_MARITUR_DOCUMENT_MODULE!;
        const mariturDevRole = process.env.DEV_MARITUR_ROLE_MODULE!;
        const mariturDevSupplier = process.env.DEV_MARITUR_SUPPLIER_MODULE!;
        const mariturDevBankAccount = process.env.DEV_MARITUR_BANKACCOUNT_MODULE!; 
        const mariturDevConcessionaire = process.env.DEV_MARITUR_CONCESSIONAIRE_MODULE!;
        const mariturDevClient = process.env.DEV_MARITUR_CLIENT_MODULE!;
        const mariturDevHotel = process.env.DEV_MARITUR_HOTEL_MODULE!;
        const mariturDevConfig = process.env.DEV_MARITUR_CONFIG_MODULE!;

        // Inicialización de los locators
        this.itineraryModule = page.getByRole('link', { name: 'Itinerario' });
        this.itineraryModuleUrl = mariturDevItinerary; 

        this.userModule = page.getByRole('link', { name: 'Usuarios' });
        this.userModuleUrl = mariturDevUser;

        this.branchModule = page.getByRole('link', { name: 'Sucursales' });
        this.branchModuleUrl = mariturDevBranch;

        this.serviceModule = page.getByRole('link', { name: 'Servicios' });
        this.serviceModuleUrl = mariturDevService;

        this.documentModule = page.getByRole('link', { name: 'Documentos' });
        this.documentModuleUrl = mariturDevDocument;

        this.roleModule = page.getByRole('link', { name: 'Roles' });
        this.roleModuleUrl = mariturDevRole;

        this.supplierModule = page.getByRole('link', { name: 'Proveedores' });
        this.supplierModuleUrl = mariturDevSupplier;

        this.bankAccountModule = page.getByRole('link', { name: 'Cuentas de Banco' });
        this.bankAccountModuleUrl = mariturDevBankAccount

        this.concessionaireModule = page.getByRole('link', { name: 'Concesiones' });
        this.concessionaireModuleUrl = mariturDevConcessionaire;

        this.clientModule = page.getByRole('link', { name: 'Clientes' });
        this.clientModuleUrl = mariturDevClient;

        this.hotelModule = page.getByRole('link', { name: 'Hoteles' });
        this.hotelModuleUrl = mariturDevHotel;

        this.configModule =  page.getByRole('link', { name: 'Configuración' });
        this.configModuleUrl = mariturDevConfig;

    }

    // Interacción con los elementos ↓
    // Aquí empiezan los métodos ↓
    async goToItineraryModule() {
        await this.itineraryModule.waitFor();
        await this.itineraryModule.click();
        await expect(this.page).toHaveURL(this.itineraryModuleUrl);
        //await expect(this.page).toHaveScreenshot('itinerary_Module_snap.png');
    }

    async goToUserModule(){
        await this.userModule.waitFor();
        await this.userModule.click();
        await expect(this.page).toHaveURL(this.userModuleUrl);
        //await expect(this.page).toHaveScreenshot('itinerary_Module_snap.png');
    }

    async goToBranchModule(){
        await this.branchModule.waitFor();
        await this.branchModule.click();
        await expect(this.page).toHaveURL(this.branchModuleUrl);
    }

    async goToServiceModule(){
        await this.serviceModule.waitFor();
        await this.serviceModule.click();
        await expect(this.page).toHaveURL(this.serviceModuleUrl);
    }

    async goToDocumentModule(){
        await this.documentModule.waitFor();
        await this.documentModule.click();
        await expect(this.page).toHaveURL(this.documentModuleUrl);
    }

    async goToRoleModule(){
        await this.roleModule.waitFor();
        await this.roleModule.click();
        await expect(this.page).toHaveURL(this.roleModuleUrl);
    }

    async goToSupplierModule(){
        await this.supplierModule.waitFor();
        await this.supplierModule.click();
        await expect(this.page).toHaveURL(this.supplierModuleUrl);
    }

    async goToBankAccountModule(){
        await this.bankAccountModule.waitFor();
        await this.bankAccountModule.click();
        await expect(this.page).toHaveURL(this.bankAccountModuleUrl);
    }

    async goToConcessionaireModule(){
        await this.concessionaireModule.waitFor();
        await this.concessionaireModule.click();
        await expect(this.page).toHaveURL(this.concessionaireModuleUrl);
    }

    async goToClientModule(){
        await this.clientModule.waitFor();
        await this.clientModule.click();
        await expect(this.page).toHaveURL(this.clientModuleUrl);
    }

    async goToHotelModule(){
        await this.hotelModule.waitFor();
        await this.hotelModule.click();
        await expect(this.page).toHaveURL(this.hotelModuleUrl);
    }

    async goToConfigModule(){
        await this.configModule.waitFor();
        await this.configModule.click();
        await expect(this.page).toHaveURL(this.configModuleUrl);
    }
}