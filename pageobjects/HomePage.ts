import { expect, Page, Locator } from "@playwright/test";
import { Enviroments } from "../fixture/testData.json";


export class HomePage {

    // Aquí van los locators ↓
    private itineraryModule: Locator;
    private itineraryModuleUrl: string;

    private userModule: Locator
    private userModuleUrl: string;


    //Elementos a trabajar 
    /*
    private branchModule: Locator
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
        // Inicialización de los locators
        this.itineraryModule = page.getByRole('link', { name: 'Itinerario' });
        this.itineraryModuleUrl = Enviroments.devItinerary; 

        this.userModule = page.getByRole('link', { name: 'Usuarios' });
        this.userModuleUrl = Enviroments.devUser;

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


}