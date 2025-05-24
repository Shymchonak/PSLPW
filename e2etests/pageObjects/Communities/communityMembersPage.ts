import {Page, Locator} from "@playwright/test";
import { Base } from "../basePage";
import { CommunitiesList} from "../components/communitiesList";
import { LeftSideMenu } from "../components/leftSideMenu";
import {CommunityDetails, RolePermissions, TaskTypes} from "../../testData/constants";

let communitiesList: CommunitiesList
let leftSideMenu: LeftSideMenu
let communityDetailsConst: CommunityDetails
let taskTypesConst: TaskTypes
let rolePermissonConsts: RolePermissions


export class CommunityMembersPage extends Base {

    constructor(page: Page) {
        super(page);
        leftSideMenu = new LeftSideMenu(page);
        communityDetailsConst = new CommunityDetails();
        communitiesList = new CommunitiesList(page);
        taskTypesConst = new TaskTypes()
        rolePermissonConsts = new RolePermissions()
    }

    ////////ROLE CREATION LOCATORS
    get addNewRoleButton():Locator{
        return this.page.locator('//div[contains(text(), "Roles in community")]//button')
    }

    get createNewRoleButton():Locator{
        return this.page.locator('//div[contains(text(), "Create new role")]')
    }

    get newRoleTitle():Locator{
        return this.page.locator('//p[contains(text(), "Role name")]/following-sibling::div//input')
    }

    persmissionsTogle(permissionTitle:string):Locator{
        return this.page.locator(`//p[contains(text(), "${permissionTitle}")]/following-sibling::div//div[@class="react-toggle-track"]`)
    }

    get confirmCreateRoleButton():Locator{
        return this.page.locator('//button[contains(text(), "Create role")]')
    }

    memberRoleTitle(roleTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${roleTitle}")]`)
    }

    ////////// ROLE DELETION LOCATORS
    initiateRoleDeletionButton(roleTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${roleTitle}")]/following-sibling::div//i[contains(@class, "fa-times")]`)
    }

    get deleteConfirmationButton():Locator{
        return this.page.locator('//button[contains(text(), "Delete")]')
    }

    ////////////EDIT ROLE LOCATORS

    initiateRoleEditButton(roleTitle:string):Locator{
        return this.page.locator(`//div[contains(text(), "${roleTitle}")]/following-sibling::div//i[contains(@class, "fa-pencil ")]`)
    }

    get updateRoleConfirmationButton():Locator{
        return this.page.locator('//button[contains(text(), "Update role")]')
    }

    ////////SEARCH MEMBER LOCATORS

    get searchField():Locator{
        return this.page.locator('//div[contains(text(),"Community members")]/following-sibling::div//input[@placeholder="Search"]')
    }

    invalidSearchResult(messagetext:string):Locator{
        return this.page.locator(`//p[contains(text(),"${messagetext}")]`)
    }

    //////////MEMBER INVITATION

    get addMemberButton():Locator{
        return this.page.locator('//div[contains(@class,"status-heading-search")]//i[contains(text(),"add")]')
    }

    get addMemberFromTheListButon():Locator{
        return this.page.locator('//div[contains(text(), "Add members from list")]')
    }
    get inviteMemberButton():Locator{
        return this.page.locator('//div[contains(text(), "Invite a member")]')
    }

    get searchFieldOnTheList():Locator{
        return this.page.locator('//div[contains(@class, "suggestion-input")]//input')
    }

    get selectSearchedMember():Locator{
        return this.page.locator('//div[contains(@class, "autocomplete-dropdown-container")]')
    }
    get roleSelectionDropdownMenu():Locator{
        return this.page.locator('//td[@class="invites__role"]//div[contains(@class, "rw-widget-input")]')
    }
    selectRoleInDropdownMenu(roleTitle:string):Locator{
        return this.page.locator(`//div[contains(@class, "rw-list-option") and contains(text(), "${roleTitle}")]`)
    }

    get inviteSelectedMemberFromTheListButon():Locator{
        return this.page.locator('//button[contains(text(), "Invite selected")]')
    }

    findMemberInTheList(membersFirstName:string):Locator{
        return this.page.locator(`//div[contains(@class, "name") and contains(text(), "${membersFirstName}")]`)
    }

    get invitedMemberRoleDropdown():Locator{
        return this.page.locator('//p[contains(text(), "Assigned role")]/following-sibling::div//div[contains(@class, "rw-widget-picker")]')
    }

    authorizedAccessTypes(type:string):Locator{
        return this.page.locator(`//label[contains(text(), "${type}")]/preceding-sibling::div//div`)
    }

    get createMemberButton():Locator{
        return this.page.locator('//button[contains(text(), "Create member")]')
    }
    //////////MEMBER DELETION LOCATORS

    get deleteUserButton():Locator{
        return this.page.locator('//div[@class="footer delete"]//button[contains(text(), "Delete")]')
    }

    ////////UPDATE MEMBER LOCATORS

    get updateMemberButton():Locator{
        return this.page.locator('//button[contains(text(), "Update member")]')
    }

    get memberEmailField():Locator{
        return this.page.locator('input[name="email"]')
    }

    get memberFirstNameField():Locator{
        return this.page.locator('input[name="firstName"]')
    }
    get memberLastNameField():Locator{
        return this.page.locator('input[name="lastName"]')
    }

    //////////ROLE CREATION ACTIONS
    async setPermission(permissionName: string, enable: boolean): Promise<void> {
        const toggle = this.persmissionsTogle(permissionName);
        await toggle.waitFor({ state: "visible" });
        const parentToggle = toggle.locator("..");
        const isChecked = await parentToggle.evaluate((el) =>
            el.classList.contains("react-toggle--checked")
        );
        if (enable !== isChecked) {
            await toggle.click();
        }
    }

    async createMemberRole(newRoleTitle:string):Promise<void>{
        await this.addNewRoleButton.click();
        await this.createNewRoleButton.click();
        await this.newRoleTitle.fill(newRoleTitle);
        await this.setPermission(rolePermissonConsts.POST_TASK, true);
        await this.setPermission(rolePermissonConsts.DELETE_TASK, true);
        await this.setPermission(rolePermissonConsts.VIEW_TASKS, true);
        await this.setPermission(rolePermissonConsts.UPDATE_TASK, true);
        await this.confirmCreateRoleButton.click();
    }

    ///////////ROLE DELETION ACTIONS
    async editMembersRole(roleTitle:string, editedRoleTitle:string):Promise<void>{
        await this.initiateRoleEditButton(roleTitle).click();
        await this.newRoleTitle.fill(editedRoleTitle);
        await this.updateRoleConfirmationButton.click();
    }

    ////////ROLE DELETION ACTIONS
    async deleteMembersRole(roleTitle:string):Promise<void>{
        await this.initiateRoleDeletionButton(roleTitle).click();
        await this.deleteConfirmationButton.click();
    }

    /////////MEMBER INVITATIONS ACTIONS

    async addMemberFromTheList(memberName:string, roleTitle:string):Promise<void>{
        await this.addMemberButton.click();
        await this.addMemberFromTheListButon.click();
        await this.searchFieldOnTheList.fill(memberName);
        await this.selectSearchedMember.click();
        await this.roleSelectionDropdownMenu.click();
        await this.selectRoleInDropdownMenu(roleTitle).click();
        await this.inviteSelectedMemberFromTheListButon.click();
    }

    async grantAccessTypes(accessType: string, enable: boolean): Promise<void> {
        const toggle = this.authorizedAccessTypes(accessType);
        await toggle.waitFor({ state: "visible" });
        const isChecked = await toggle.evaluate((el) =>
            el.classList.contains("react-toggle--checked")
        );
        if (enable !== isChecked) {
            await toggle.click();
        }
    }


    async inviteMemberByEmail(membersEmail:string,firstName:string,lastName:string, roleTitle:string):Promise<void>{
        await this.addMemberButton.click();
        await this.inviteMemberButton.click();
        await this.memberEmailField.fill(membersEmail);
        await this.memberFirstNameField.fill(firstName);
        await this.memberLastNameField.fill(lastName);
        await this.invitedMemberRoleDropdown.click();
        await this.selectRoleInDropdownMenu(roleTitle).click();
        await this.grantAccessTypes("Phone mobile application (iOS/Android)", true);
        await this.grantAccessTypes("Web application access for tablets", true);
        await this.grantAccessTypes("Web application access for desktops", true);
        await this.createMemberButton.click();
    }


    ///////DELETE MEMBER ACTIONS
    async   deleteMember(membersFirstName:string):Promise<void>{
        await this.findMemberInTheList(membersFirstName).click()
        await this.deleteUserButton.click();
        await this.deleteConfirmationButton.click();
    }

    ///////////UPDATE MEMBER ACTIONS

    async updateMemberFistName(oldFiirstName:string, newFirstName:string):Promise<void>{
        await this.findMemberInTheList(oldFiirstName).click()
        await this.memberFirstNameField.fill(newFirstName);
        await this.updateMemberButton.click();
    }
}
