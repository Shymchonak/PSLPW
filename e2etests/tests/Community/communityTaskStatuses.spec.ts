import { test, Page, expect } from "@playwright/test";
import {CommunityDetails, CustomTaskStatuses, Urls} from "../../testData/constants";
import { CommunityDetailsPage } from "../../pageObjects/Communities/communityDetailsPage";
import {CommunitiesList} from "../../pageObjects/components/communitiesList";

test.describe.serial('Community Task Statuses', ()=> {
    let page: Page
    let communityDetails: CommunityDetailsPage
    let communityDetailsConst: CommunityDetails
    let communitiesList: CommunitiesList
    let urlsConst: Urls
    let customTaskStatusesConst: CustomTaskStatuses

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetailsConst = new CommunityDetails()
        communityDetails = new CommunityDetailsPage(page)
        urlsConst = new Urls();
        customTaskStatusesConst = new CustomTaskStatuses();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Create custom PENDING task status', async () => {
        await communityDetails.navigate(urlsConst.MANAGE)
        await communitiesList.getCommunityInTheList(customTaskStatusesConst.COMMUNITY_TASK_STATUS_TEST).click()
        await communityDetails.createCustomTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_PENDING_NAME,customTaskStatusesConst.PARENT_STATUS_PENDING, customTaskStatusesConst.COLOR_FOR_PARENT_PENDING);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_CREATED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_CREATED).click()
    })

    test('Create custom INPROGRESS task status', async () => {
        await communitiesList.getCommunityInTheList(customTaskStatusesConst.COMMUNITY_TASK_STATUS_TEST).click()
        await communityDetails.createCustomTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_INPROGRESS_NAME,customTaskStatusesConst.PARENT_STATUS_INPROGRESS, customTaskStatusesConst.COLOR_FOR_PARENT_INPROGRESS);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_CREATED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_CREATED).click()
    })
    test('Create custom COMPLETED task status', async () => {

        await communitiesList.getCommunityInTheList(customTaskStatusesConst.COMMUNITY_TASK_STATUS_TEST).click()
        await communityDetails.createCustomTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_COMPLETED_NAME,customTaskStatusesConst.PARENT_STATUS_COMPLETED, customTaskStatusesConst.COLOR_FOR_PARENT_COMPLETED);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_CREATED)).toBeVisible())

    })

    test('Edit custom PENDING task status', async () => {
        await communityDetails.editTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_PENDING_NAME, customTaskStatusesConst.CUSTOM_TASK_STATUS_PENDING_NAME_EDITED)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED).click()

    })

    test('Edit custom INPROGRESS task status', async () => {
        await communityDetails.editTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_INPROGRESS_NAME, customTaskStatusesConst.CUSTOM_TASK_STATUS_INPROGRESS_NAME_EDITED)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED).click()
    })

    test('Edit custom COMPLETED task status', async () => {
        await communityDetails.editTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_COMPLETED_NAME, customTaskStatusesConst.CUSTOM_TASK_STATUS_COMPLETED_NAME_EDITED)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_UPDATED).click()
    })

    test('Delete custom PENDING task status', async () => {
        await communityDetails.deleteTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_PENDING_NAME_EDITED)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_DELETED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_DELETED).click()

    })

    test('Delete custom INPROGRESS task status', async () => {
        await communityDetails.deleteTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_INPROGRESS_NAME_EDITED)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_DELETED)).toBeVisible())
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.STATUS_DELETED).click()
    })

    test('Delete custom COMPLETED task status', async () => {
        await communityDetails.deleteTaskStatus(customTaskStatusesConst.CUSTOM_TASK_STATUS_COMPLETED_NAME_EDITED)
        await (expect (communityDetails.deleteTaskStatusButton(customTaskStatusesConst.CUSTOM_TASK_STATUS_COMPLETED_NAME_EDITED)).not.toBeVisible())
    })


})