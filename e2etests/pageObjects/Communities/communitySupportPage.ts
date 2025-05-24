import {Locator, Page,} from "@playwright/test";
import { Base } from "../basePage";


export class CommunitySupportPage extends Base {

    constructor(page: Page) {
        super(page);

    }

    ///////SUPPORT TEAM CREATION LOCATORS

    get addSupportTeamButton ():Locator{
        return this.page.locator('//div[contains(text(), "Support teams")]//button')
    }

    get supportTeamNameField():Locator{
        return this.page.locator('[placeholder="Enter a name"]')
    }
    colorForSupportTeam(parentColor:string){
        return this.page.locator(`[style="background: ${parentColor};"]`)
    }

    get createSupportTeamButton():Locator{
        return this.page.locator('//button[contains (text(), "Create support team")]')
    }

    selectTeamInTheList (teamTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${teamTitle}")]`)
    }
    ///////SUPPORT TEAM DELETION

    supportTeamForEdit(teamTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${teamTitle}")]/following-sibling::div//i[contains(@class, "fa-pencil")]`)
    }

    get editSupportTeamButton():Locator{
        return this.page.locator('//button[contains (text(), "Edit support team")]')
    }

    ///////SUPPORT TEAM DELETION

   supportTeamForDeletion(teamTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${teamTitle}")]/following-sibling::div//i[contains(@class, "fa-times action")]`)
   }
   get confirmTeamDeletion():Locator{
        return this.page.locator('//button[contains(text(), "Delete")]')
   }

    //////SUPPORT TEAM CREATION ACTIONS

    async createSupportTeam(teamTitle:string, teamColor:string):Promise<void>{
        await this.addSupportTeamButton.click();
        await this.supportTeamNameField.fill(teamTitle)
        await this.colorForSupportTeam(teamColor).click();
        await this.createSupportTeamButton.click();
    }
    //////SUPPORT TEAM DELETION ACTIONS

    async deleteSupportTeam(teamTitle:string):Promise<void>{
        await this.supportTeamForDeletion(teamTitle).click();
        await this.confirmTeamDeletion.click()
    }

    //////SUPPORT TEAM EDIT ACTIONS

    async editSupportTeam(oldTeamTitle:string,newTeamTitle:string, newTeamColor:string):Promise<void>{
        await this.supportTeamForEdit(oldTeamTitle).click();
        await this.supportTeamNameField.fill(newTeamTitle);
        await this.colorForSupportTeam(newTeamColor).click();
        await this.editSupportTeamButton.click()
    }

}