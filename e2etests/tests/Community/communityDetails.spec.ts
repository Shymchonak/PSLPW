import { test, expect, Page} from "@playwright/test";
import { CommunitiesList } from "../../pageObjects/components/communitiesList";
import {CommunityDetails, Urls} from "../../testData/constants";
import { CommunityDetailsPage } from "../../pageObjects/Communities/communityDetailsPage";


test.describe.serial('Communities test', () => {

    let page: Page;
    let communitiesList: CommunitiesList;
    let communityDetailsConst: CommunityDetails;
    let communityDetails: CommunityDetailsPage
    let urlsConstants: Urls


    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetailsConst = new CommunityDetails()
        communityDetails = new CommunityDetailsPage(page)
        urlsConstants = new Urls();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('New community creation', async () => {
        await communityDetails.navigate('/admin-dashboard')
        await communityDetails.createNewCommunity(communityDetailsConst.COMMUNITY_DETAILS_NAME);
        await expect (await communitiesList.getCommunityInTheList(communityDetailsConst.COMMUNITY_DETAILS_NAME)).toBeVisible()


    })

    test('Edit community name', async () => {
        await  communityDetails.successCommunityDetailsNotifications(communityDetailsConst.COMMUNITY_CREATED).waitFor({state: 'hidden'})
        await communityDetails.editCommunityName();
        await expect (await communityDetails.successCommunityDetailsNotifications(communityDetailsConst.COMMUNITY_UPDATE)).toBeVisible()
    })

    test('Edit community description', async () => {
        await communityDetails.successCommunityDetailsNotifications(communityDetailsConst.COMMUNITY_UPDATE).waitFor({state: 'hidden'})
        await communityDetails.editCommunityDescription();
        await expect (await communityDetails.successCommunityDetailsNotifications(communityDetailsConst.COMMUNITY_UPDATE)).toBeVisible()
    })


    test('Community deletion', async () =>{
        await communityDetails.navigate(urlsConstants.CUSTOM_FIELDS)
        await communityDetails.navigate(urlsConstants.MANAGE)
        await communityDetails.deleteCommunity(communityDetailsConst.UPDATED_COMMUNITY_DETAILS_NAME)
        await expect (await communitiesList.getCommunityInTheList(communityDetailsConst.UPDATED_COMMUNITY_DETAILS_NAME)).not.toBeVisible()
    })
})