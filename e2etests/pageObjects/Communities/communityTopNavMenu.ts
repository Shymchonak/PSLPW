import {Page, Locator} from "@playwright/test";
import { Base } from "../basePage";


export class CommunityTopNavMenu extends Base {

    constructor(page: Page) {
        super(page);

    }

    //NAVIGATION

    navigateTopMenu(sectionName: string): Locator {
        return this.page.locator(`//a[contains(text(), "${sectionName}")]`)
    }
}
