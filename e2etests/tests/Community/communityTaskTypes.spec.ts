import { test, expect, Page} from "@playwright/test";
import { CommunityDetailsPage } from '../../pageObjects/Communities/communityDetailsPage'
import { CommunitiesList} from "../../pageObjects/components/communitiesList";
import { CommunityDetails, Urls, TaskTypes} from "../../testData/constants";


test.describe.serial('Task types test', () => {

    let page: Page
    let communityDetails: CommunityDetailsPage
    let communitiesList: CommunitiesList
    let communityDetailsConst: CommunityDetails
    let urlsConst: Urls
    let taskTypesConst: TaskTypes

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetailsConst = new CommunityDetails()
        communityDetails = new CommunityDetailsPage(page)
        urlsConst = new Urls();
        taskTypesConst = new TaskTypes();
        await communityDetails.navigate(urlsConst.MANAGE)
        await communitiesList.getCommunityInTheList(taskTypesConst.COMMUNITY_TASK_TYPE_NAME).click()
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Task type without subtype creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME, taskTypesConst.ICON_ID_BUG_FILL);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_CREATED)).toBeVisible())
    })

    test('Task type without subtype edit', async() => {
        await communityDetails.editTaskType(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME, taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME_EDITED);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_UPDATE)).toBeVisible())
    })

    test('Task type with subtype without timer creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME, taskTypesConst.ICON_ID_BUG_LINE);
        await communityDetails.createSubtypeWithoutTimer(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME, taskTypesConst.SUBTYPE_WITHOUT_TIMER)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.SUBTYPE_CREATED)).toBeVisible())
    })

    test('Subtype without timer edit', async () => {
        await communityDetails.editTaskSubtypeWithoutTimer(taskTypesConst.SUBTYPE_WITHOUT_TIMER, taskTypesConst.SUBTYPE_WITHOUT_TIMER_EDITED)
        await (await  expect(communityDetails.subtypeNameCheck(taskTypesConst.SUBTYPE_WITHOUT_TIMER_EDITED)).toBeVisible())
    })

    test('Subtype with timer creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME, taskTypesConst.ICON_ID_BUG_TWO_LINE);
        await communityDetails.createSubtypeWithTimer(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME, taskTypesConst.SUBTYPE_WITH_TIMER, taskTypesConst.TIME_PERIOD_HOURS, taskTypesConst.TIME_AMOUNT_VALUE)
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.SUBTYPE_CREATED)).toBeVisible())
    })

    test('Task type with multiple subtypes creation', async() => {
        await communityDetails.createTaskTypeWithoutSubtype(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES, taskTypesConst.ICON_ID_BUG_TWO_FILL);
        await communityDetails.createSubtypeWithoutTimer(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES, taskTypesConst.SUBTYPE_MULTIPLE_COLLECTION_FIRST)
        await communityDetails.createSubtypeWithTimer(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES, taskTypesConst.SUBTYPE_MULTIPLE_COLLECTION_SECOND, taskTypesConst.TIME_PERIOD_MINUTES, taskTypesConst.TIME_AMOUNT_VALUE)
        await communityDetails.selectTaskType(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES).click()
        await (expect (communityDetails.selectSubtype(taskTypesConst.SUBTYPE_MULTIPLE_COLLECTION_SECOND)).toBeVisible())
    })

    test('Subtype with timer edit', async() => {
        await communityDetails.selectTaskType(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME).click()
        await communityDetails.editTaskSubtypeWithTimer(taskTypesConst.SUBTYPE_WITH_TIMER,taskTypesConst.SUBTYPE_WITH_TIMER_EDITED, taskTypesConst.TIME_PERIOD_DAYS, taskTypesConst.TIME_AMOUNT_VALUE_EDITED )
        await communityDetails.editTaskSubTypeButton(taskTypesConst.SUBTYPE_WITH_TIMER).click();
        await (expect (communityDetails.timeAmountValue).toHaveValue(taskTypesConst.TIME_AMOUNT_VALUE_EDITED))
        await communityDetails.closeEditSubtypeModel.click()
    })

    test("Subtype without timer deletion", async () => {
        await communityDetails.deleteSubtype(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME, taskTypesConst.SUBTYPE_WITHOUT_TIMER_EDITED);
        await communityDetails.selectTaskType(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME).click()
        await (expect (communityDetails.deleteTaskSubypeButton( taskTypesConst.SUBTYPE_WITHOUT_TIMER_EDITED)).not.toBeVisible())
    })

    test("Subtype with timer deletion", async () => {
        await communityDetails.deleteSubtype(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME, taskTypesConst.SUBTYPE_WITH_TIMER_EDITED);
        await communityDetails.selectTaskType(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME).click()
        await (expect (communityDetails.deleteTaskSubypeButton( taskTypesConst.SUBTYPE_WITH_TIMER_EDITED)).not.toBeVisible())
    })

    test('Task type without subtype deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITHOUT_SUBTYPE_NAME_EDITED);
        await (expect (communityDetails.successCommunityDetailsNotifications(communityDetailsConst.TASK_TYPE_DELETED)).toBeVisible())
    })

    test('Task type with subtype with timer deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME);
        await (expect (communityDetails.deleteTaskTypeButton(taskTypesConst.TYPE_WITH_SUBTYPE_WITH_TIMER_NAME)).not.toBeVisible())
    })

    test('Task type with subtype without TIMER deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME);
        await (expect (communityDetails.deleteTaskTypeButton(taskTypesConst.TYPE_WITH_SUBTYPE_WITHOUT_TIMER_NAME)).not.toBeVisible())
    })

    test('Task type with multiple subtypes deletion', async() => {
        await communityDetails.taskTypeDeletion(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES);
        await (expect (communityDetails.deleteTaskTypeButton(taskTypesConst.TYPE_WITH_MULTIPLE_SUBTYPES)).not.toBeVisible())
    })

})