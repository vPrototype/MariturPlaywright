import { expect, Page, Locator } from "@playwright/test";


export class HomePage {

    // Aquí van los locators ↓
    private itineraryModule: Locator;
    private itineraryModuleUrl: string;

    private userModule: Locator
    private userModuleUrl: string;

    private branchModule: Locator
    private branchModuleUrl: string


    //Elementos a trabajar 
    /*
    private serviceModule: Locator
    private documentModule: Locator
    private roleModule: Locator
    private supplierModule: Locator
    private bankAccountModule: Locator
    private concessionaireModule: Locator
    private clientModule: Locator
    private hotelModule: Locator
    private configModule: Locator
    */

    constructor(private readonly page: Page) {

        const mariturDevItinerary = process.env.DEV_MARITUR_ITINERARY_MODULE!;
        const mariturDevUser = process.env.DEV_MARITUR_USER_MODULE!;
        const mariturDevBranch = process.env.DEV_MARITUR_BRANCH_MODULE!;

        // Inicialización de los locators
        this.itineraryModule = page.getByRole('link', { name: 'Itinerario' });
        this.itineraryModuleUrl = mariturDevItinerary; 

        this.userModule = page.getByRole('link', { name: 'Usuarios' });
        this.userModuleUrl = mariturDevUser;

        this.branchModule = page.getByRole('link', { name: 'Sucursales' });
        this.branchModuleUrl = mariturDevBranch;

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


}