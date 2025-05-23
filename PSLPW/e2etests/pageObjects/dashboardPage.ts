import { Page, Locator } from '@playwright/test';
import { Base } from './basePage'

export class DashboardPage extends Base {
    constructor(page: Page) {
        super(page);
    }

    get logoutButton():Locator {
        return this.page.locator('//button[contains(text(), "Logout")]');
    }

    topNavigations(sectionName:string):Locator {
        return this.page.locator(`//div[@class=\'dashboard-header-redesign__top-wrapper\']//div[contains(text(), "${sectionName}")]`)
    }
}

