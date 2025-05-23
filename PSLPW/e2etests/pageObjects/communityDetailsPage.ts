import {Page, Locator} from "@playwright/test";
import { Base } from "./basePage";
import { CommunitiesList} from "./components/communitiesList";
import { LeftSideMenu } from "../pageObjects/components/leftSideMenu";
import { CommunityDetails, TaskTypes } from "../testData/constants";

let communitiesList: CommunitiesList
let leftSideMenu: LeftSideMenu
let communityDetailsConst: CommunityDetails
let taskTypesConst: TaskTypes




export class CommunityDetailsPage extends Base {

    constructor(page: Page) {
        super(page);
        leftSideMenu = new LeftSideMenu(page);
        communityDetailsConst = new CommunityDetails();
        communitiesList = new CommunitiesList(page);
        taskTypesConst = new TaskTypes()

    }

    get communityNameField(): Locator {
        return this.page.locator('[placeholder="Enter a name for the community"]')
    }

    get privacyDropDownMenu(): Locator {
        return this.page.locator('//span[contains (text(), "Private")]')
    }
    get privateCommunityOption(): Locator {
        return this.page.locator(' //div[contains(text(), "Private")]');
    }

    get publicCommunityOption(): Locator {
        return this.page.locator(' //div[contains(text(), "Public")]');
    }

    get createCommunityButton():Locator {
        return this.page.locator('.button.cyan')
    }

    get additionalCommunityOptions(): Locator {
        return this.page.locator('.icon-options')
    }

    get deleteCommunityButton(): Locator {
        return this.page.locator('//div[contains(text(), "Delete community")]')
    }
    get confirmDeleteButton(): Locator {
        return this.page.locator('//div[@class=\'modal display-block  \']//button[contains(text(), "Delete")]')
    }

    get buttonSaveDetailsCommunity(): Locator {
        return this.page.locator('//button[contains(text(), "Save details")]')
    }

    get buttonAddTaskStatuses():Locator {
        return this.page.locator('//div[@class=\'status-heading\' and contains(text(),\'Tasks statuses\')]//button')
    }

    get buttonAddTaskTypes(): Locator{
        return this.page.locator('//div[@class=\'status-heading\' and contains(text(),\'Task types\')]//button')
    }

    get taskStatusNameField(): Locator{
        return this.page.locator('//h2[contains(text(), "Create task status")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    get taskTypeNameField(): Locator {
        return this.page.locator('//h2[contains(text(), "Create a new task type")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    get taskTypeNameFieldForEdit(): Locator {
        return this.page.locator('//h2[contains(text(), "Update task type")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    // get typeIconCategoryDropDown(): string{
    //     return this.page.locator('select[name="categoryIcon"]')
    // }
    //
    // get typeIconCategorySelection(): Locator{
    //     return this.page.locator('[value=Business]')
    // }


    iconForTaskType(iconId:string):Locator{
        return this.page.locator(`button#${iconId}`)
    }

    get taskStatusNameFieldForEdit(): Locator{
        return this.page.locator('//h2[contains(text(), "Update task status")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    get taskStatusOption():Locator{
        return this.page.locator('//p[contains(text(), "Child status of")]/following-sibling::div[contains(@class, "rw-dropdown-list")]')
    }

    parentTaskStatusSelection(parentName:string){
        return this.page.locator(`//span[contains(text(), "${parentName}")]`)
    }

    colorForParentTaskStatus(parentColor:string){
        return this.page.locator(`[style="background: ${parentColor};"]`)
    }
    get createTaskStatuButton():Locator {
        return this.page.locator('//button[contains(text(), "Create task status")]')
    }

    get createTaskTypeButton():Locator {
        return this.page.locator('//button[contains(text(), "Create type")]')
    }
    get updateTaskStatuButton():Locator {
        return this.page.locator('//button[contains(text(), "Update task status")]')
    }

    get updateTaskTypeButton():Locator {
        return this.page.locator('//button[contains(text(), "Update type")]')
    }

    // async selectPrivacyOfCommunity(setUpPrivacy:Locator):Promise<void>{
    //     await this.privacyDropDownMenu.click();
    //     await setUpPrivacy.click()
    // }

    get descriptionField(): Locator{
        return this.page.locator('textarea[rows="5"]')
    }

    // get closeNotificationButton(): Locator{
    //     return this.page.locator('.Toastify__close-button')
    // }

    successCommunityDetailsNotifications(successMessage:string):Locator{
        return this.page.locator(`//div[contains(text(), "${successMessage}")]`)
    }


    editTaskStatusButton(taskStatusNameForEdit:string): Locator{
        return this.page.locator(`//div[contains(text(), "${taskStatusNameForEdit}")]/following-sibling::div//i[contains(@class, "fa-pencil")]`)
    }

    deleteTaskStatusButton (taskStatusNameForDeletion:string): Locator{
        return this.page.locator(`//div[contains(text(), "${taskStatusNameForDeletion}")]/following-sibling::div//i[contains(@class, "fa-times")]`)
    }

    editTaskTypeButton(typeNameForEdit:string):Locator{
        return this.page.locator(`//span[contains(text(), "${typeNameForEdit}")]/following-sibling::div//i[contains(@class, "fa-pencil")]`)
    }

    selectTaskType(tastTypeName:string):Locator{
        return this.page.locator(`//span[contains(text(), "${tastTypeName}")]`)
    }

    get addSubtypeButton():Locator {
        return this.page.locator('//div[contains(text(), "Sub types")]//button')
    }

    get subtypeNameField(): Locator{
        return this.page.locator('//h2[contains(text(), "Create a new sub-type inside")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input')
    }

    get createSubtypeButton():Locator {
        return this.page.locator('//button[contains(text(), "Create sub-type")]')
    }

    get addTimerTogle():Locator{
        return this.page.locator('.has-tracking .react-toggle-track')
    }

    get timeMetric():Locator{
        return this.page.locator('//p[contains(text(), "Time metric")]/following-sibling::div[contains(@class, "rw-dropdown-list")]')
    }

    get timeAmountValue():Locator{
        return this.page.locator('//input[@name="amount"]')
     }

    timePeriod (timerPeriod:string):Locator{
        return this.page.locator(`//div[@class="rw-list-option" and contains(text(), "${timerPeriod}")]`)
    }

    editTaskSubTypeButton(subtypeNameForEdit:string):Locator{
        return this.page.locator(`//div[contains(text(), "${subtypeNameForEdit}")]/following-sibling::div//i[contains(@class, "fa-pencil")]`)
    }

    get taskSubTypeNameFieldForEdit(): Locator {
        return this.page.locator('//h2[contains(text(), "Edit sub-type inside")]/following-sibling::div[@class=\'input-group\']//div[@class=\'input\']//input[@name="name"]')
    }

    get updateTaskSubtypeButton():Locator {
        return this.page.locator('//div//button[contains(text(), "Update sub-type")]')
    }

    subtypeNameCheck(subtypeName:string):Locator{
        return this.page.locator(`//div[contains(text(), "${subtypeName}")]`)
    }

    get closeEditSubtypeModel():Locator{
        return this.page.locator('//div[contains(@class, "display-block")]//div[contains(@class, "close")]')
    }

    deleteTaskTypeButton(typeNameForDeletion:string):Locator{
        return this.page.locator(`//span[contains(text(), "${typeNameForDeletion}")]/following-sibling::div//i[contains(@class, "fa-times")]`)
    }

    deleteTaskSubypeButton(subtypeNameForDeletion:string):Locator{
        return this.page.locator(`//div[contains(text(), "${subtypeNameForDeletion}")]/following-sibling::div//i[contains(@class, "fa-times")]`)
    }

    selectSubtype(subtypeName:string):Locator{
        return this.page.locator(`//div[contains(text(), "${subtypeName}")]`)
    }
    async createNewCommunity(newCommunityName: string):Promise<void>{
        await leftSideMenu.goToManagePage();
        await communitiesList.addCommunityButton.click();
        await this.communityNameField.fill(newCommunityName)
        await this.descriptionField.fill(communityDetailsConst.NEW_COMMUNITY_DESCRIPTION)
        await this.createCommunityButton.click()
    }

    async editCommunityName():Promise<void>{
        await this.communityNameField.fill(communityDetailsConst.UPDATED_COMMUNITY_DETAILS_NAME);
        await this.buttonSaveDetailsCommunity.click();
    }

    async editCommunityDescription():Promise<void>{
        await this.descriptionField.fill(communityDetailsConst.COMMUNITY_DESCRIPTON_EDITED)
        await this.buttonSaveDetailsCommunity.click();
    }

    async createCustomTaskStatus(communityName:string,parentStatus:string, parentColor:string):Promise<void>{
        await this.buttonAddTaskStatuses.click();
        await this.taskStatusNameField.fill(communityName);
        await this.taskStatusOption.click();
        await this.parentTaskStatusSelection(parentStatus).click()
        await this.colorForParentTaskStatus(parentColor).click();
        await this.createTaskStatuButton.click()
    }
    async editTaskStatus(taskStatusName:string, newTaskStatusName:string):Promise<void>{
        await this.editTaskStatusButton(taskStatusName).click();
        await this.taskStatusNameFieldForEdit.fill(newTaskStatusName);
        await this.updateTaskStatuButton.click()
    }

    async deleteTaskStatus(taskStatusNameForDeletion:string):Promise<void>{
        await this.deleteTaskStatusButton(taskStatusNameForDeletion).click();
        await this.confirmDeleteButton.click()
    }

    async createTaskTypeWithoutSubtype(typeName:string,typeIcon:string): Promise<void> {
        await this.buttonAddTaskTypes.click();
        await this.taskTypeNameField.fill(typeName);
        await this.page.selectOption(taskTypesConst.ICON_CATEGORY, taskTypesConst.ICON_CATEGORY_SELECTION )
        await this.iconForTaskType(typeIcon).click();
        await this.createTaskTypeButton.click();
    }

    async editTaskType(TypeName:string, newTaskTypeName:string):Promise<void>{
        await this.editTaskTypeButton(TypeName).click();
        await this.taskTypeNameFieldForEdit.fill(newTaskTypeName);
        await this.updateTaskTypeButton.click()
    }

    async createSubtypeWithoutTimer (taskTypeName:string,subtypeName:string):Promise<void> {
        await this.selectTaskType(taskTypeName).click();
        await this.addSubtypeButton.click();
        await this.subtypeNameField.fill(subtypeName);
        await this.createSubtypeButton.click();
    }

    async createSubtypeWithTimer (taskTypeName:string,subtypeName:string,timePeriod:string,timeValue:string):Promise<void>{
        await this.selectTaskType(taskTypeName).click();
        await this.addSubtypeButton.click();
        await this.subtypeNameField.fill(subtypeName);
        await this.addTimerTogle.click();
        await this.timeMetric.click();
        await this.timePeriod(timePeriod).click();
        await this.timeAmountValue.fill(timeValue)
        await this.createSubtypeButton.click();
    }

    async editTaskSubtypeWithoutTimer(subtypeName:string, newTaskSubtypeName:string):Promise<void>{
        await this.editTaskSubTypeButton(subtypeName).click();
        await this.taskSubTypeNameFieldForEdit.fill(newTaskSubtypeName);
        await this.updateTaskSubtypeButton.click()
    }

    async editTaskSubtypeWithTimer(subtypeName:string, newTaskSubtypeName:string, newTimePeriod:string, newTimeValue:string):Promise<void>{
        await this.editTaskSubTypeButton(subtypeName).click();
        await this.taskSubTypeNameFieldForEdit.fill(newTaskSubtypeName);
        await this.timeMetric.click();
        await this.timePeriod(newTimePeriod).click();
        await this.timeAmountValue.fill(newTimeValue)
        await this.updateTaskSubtypeButton.click()
    }

    async  deleteSubtype(typeName:string, subtypeNameForDeletion:string):Promise<void>{
        await this.selectTaskType(typeName).click();
        await this.deleteTaskSubypeButton(subtypeNameForDeletion).click();
        await this.confirmDeleteButton.click();
    }

    async taskTypeDeletion (taskTypeNameForDeletion:string):Promise<void>{
        await this.deleteTaskTypeButton(taskTypeNameForDeletion).click();
        await this.confirmDeleteButton.click();
    }

    async deleteCommunity(nameOfCommunityForDeletion:string):Promise<void>{
        await communitiesList.getCommunityInTheList(nameOfCommunityForDeletion).click()
        await this.additionalCommunityOptions.click();
        await this.deleteCommunityButton.click();
        await this.confirmDeleteButton.click()
    }
}


