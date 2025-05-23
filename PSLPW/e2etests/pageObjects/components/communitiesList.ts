import { Page, Locator} from "@playwright/test";
import { Base } from '../basePage'

export class CommunitiesList extends Base {

    constructor(page: Page) {
        super(page);
    }

    get addCommunityButton(): Locator {
        return this.page.locator('.add')
    }

    getCommunityInTheList(communityName:string): Locator{
        return this.page.locator(`//div[contains (text(),"${ communityName}" )]`)

    }
}