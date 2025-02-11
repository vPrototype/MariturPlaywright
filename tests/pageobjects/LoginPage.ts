import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    private emailLoginTextbox: Locator
    private passwordLoginTextbox: Locator
    private logginButton: Locator
    //private textHome: Locator
    private xpathHeaderHome: Locator

    //Localizadores de elementos ↓
    constructor(page: Page) {
        this.emailLoginTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordLoginTextbox = page.getByRole('textbox', { name: 'Contraseña' });
        this.logginButton = page.getByRole('button', { name: 'Iniciar Sesión' });
        //this.textHome = page.getByRole('link', { name: 'Inicio' });
        this.xpathHeaderHome = page.locator('xpath=//*[@id="root"]/div[2]/header');
        
    }
    
    //Interacción con los elementos ↓
    //Aquí empieza los métodos ↓
     async loginEmailAndPassword(emailLogin:string, passwordLogin:string){
        await this.emailLoginTextbox.waitFor();
        await this.emailLoginTextbox.fill(emailLogin);
        await this.emailLoginTextbox.waitFor();
        await this.passwordLoginTextbox.fill(passwordLogin);
        await this.logginButton.waitFor();
        await this.logginButton.click();
    }

    async checkSuccessfulLogin(){
        await expect(this.xpathHeaderHome).toBeVisible();
    }

}