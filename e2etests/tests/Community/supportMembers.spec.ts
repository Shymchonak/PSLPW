import { test, Page, expect } from "@playwright/test";
import { Urls, SupportMembers } from "../../testData/constants";
import { CommunityDetailsPage } from "../../pageObjects/Communities/communityDetailsPage";
import {CommunitiesList} from "../../pageObjects/components/communitiesList";
import { CommunityTopNavMenu } from "../../pageObjects/Communities/communityTopNavMenu";
import { CommunitySupportPage } from "../../pageObjects/Communities/communitySupportPage"


test.describe.serial('Community Members', ()=> {
    let page: Page
    let communityDetails: CommunityDetailsPage
    let communitiesList: CommunitiesList
    let communityTopNavMenu: CommunityTopNavMenu
    let urlsConst: Urls
    let communitySupportPage: CommunitySupportPage
    let supportMembersConst: SupportMembers

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetails = new CommunityDetailsPage(page)
        urlsConst = new Urls();
        communityTopNavMenu = new CommunityTopNavMenu(page)
        supportMembersConst = new SupportMembers()
        communitySupportPage = new CommunitySupportPage(page)
        await communityDetails.navigate(urlsConst.MANAGE)
        await communitiesList.getCommunityInTheList(supportMembersConst.SUPPORT_COMMUNITY_NAME).click()
        await communityTopNavMenu.navigateTopMenu(supportMembersConst.SUPPORT_SECTION).click()
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Support team FIRST creation', async () => {
        await communitySupportPage.createSupportTeam(supportMembersConst.SUPPORT_TEAM_FIRST,supportMembersConst.COLOR_FOR_FIRST_TEAM)
        await (expect (communitySupportPage.selectTeamInTheList(supportMembersConst.SUPPORT_TEAM_FIRST)).toBeVisible())
    })

    test('Support team SECOND creation', async () => {
        await communitySupportPage.createSupportTeam(supportMembersConst.SUPPORT_TEAM_SECOND,supportMembersConst.COLOR_FOR_SECOND_TEAM)
        await (expect (communitySupportPage.selectTeamInTheList(supportMembersConst.SUPPORT_TEAM_SECOND)).toBeVisible())
    })

    test('Support team FIRST EDIT', async () => {
        await communitySupportPage.editSupportTeam(supportMembersConst.SUPPORT_TEAM_FIRST,supportMembersConst.SUPPORT_TEAM_FIRST_EDITED,supportMembersConst.COLOR_FOR_FIRST_TEAM_UPDATE)
        await (expect (communitySupportPage.selectTeamInTheList(supportMembersConst.SUPPORT_TEAM_FIRST_EDITED)).toBeVisible())
    })
    test('Support team FIRST deletion', async () => {
        await communitySupportPage.deleteSupportTeam(supportMembersConst.SUPPORT_TEAM_FIRST_EDITED)
        await (expect (communitySupportPage.selectTeamInTheList(supportMembersConst.SUPPORT_TEAM_FIRST_EDITED)).not.toBeVisible())
    })

    test('Support team SECOND deletion', async () => {
        await communitySupportPage.deleteSupportTeam(supportMembersConst.SUPPORT_TEAM_SECOND)
        await (expect (communitySupportPage.selectTeamInTheList(supportMembersConst.SUPPORT_TEAM_SECOND)).not.toBeVisible())
    })

})