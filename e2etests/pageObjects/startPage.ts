import { Page, Locator } from '@playwright/test';
import { Base } from './basePage';
import { Login, Dashboard } from '../testData/constants'

let loginConstants: Login;


loginConstants = new Login();



export class StartPage extends Base {
    constructor(page: Page) {
        super(page);
    }

    get loginField():Locator {
        return this.page.locator('[placeholder="Email address"]');
    }

    get passwordField():Locator {
        return this.page.locator('[placeholder="Password"]');
    }

    get loginButton():Locator {
        return this.page.locator('//button');
    }

    get notificationMessage(): Locator {
        return this.page.locator('.Toastify__toast-container.Toastify__toast-container--bottom-left');
    }

    async loginProcess (usersEmail:string, usersPassword: string): Promise <void> {
        await this.loginField.fill(usersEmail);
        await this.passwordField.fill(usersPassword);
        await this.loginButton.click();
    }

}

