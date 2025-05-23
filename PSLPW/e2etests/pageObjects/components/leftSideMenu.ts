import { Page, Locator } from '@playwright/test';
import { Base } from '../basePage';

export class LeftSideMenu extends Base {

    constructor(page: Page) {
        super(page);
    }

    get communitiesButton(): Locator{
        return this.page.locator('.navigation [href="/communities"]')
    }

    get manageButton(): Locator {
        return this.page.locator('[href="/communities/manage"]')
    }

    async goToManagePage():Promise<void>{
        await this.communitiesButton.click();
        await this.manageButton.click();
    }


}
