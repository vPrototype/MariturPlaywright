import { Page, Locator } from "@playwright/test";


export class Helper{

    //Aquí van los locators ↓
    private emailLoginTextbox: Locator
    private passwordLoginTextbox: Locator
    private logginButton: Locator
    

    constructor(page: Page) {
        this.emailLoginTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordLoginTextbox = page.getByRole('textbox', { name: 'Contraseña' });
        this.logginButton = page.getByRole('button', { name: 'Iniciar Sesión' });
        

    }

    async loginAdmin(emailLogin:string, passwordLogin:string){

        await this.emailLoginTextbox.waitFor();
        await this.emailLoginTextbox.fill(emailLogin);
        await this.emailLoginTextbox.waitFor();
        await this.passwordLoginTextbox.fill(passwordLogin);
        await this.logginButton.waitFor();
        await this.logginButton.click();
    }

}