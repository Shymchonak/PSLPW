import { test, Page, expect } from "@playwright/test";
import { Urls, CommunityMembers, } from "../../testData/constants";
import { CommunityDetailsPage } from "../../pageObjects/Communities/communityDetailsPage";
import {CommunitiesList} from "../../pageObjects/components/communitiesList";
import { CommunityTopNavMenu } from "../../pageObjects/Communities/communityTopNavMenu";
import {CommunityMembersPage} from "../../pageObjects/Communities/communityMembersPage";


test.describe.serial('Community Members', ()=> {
    let page: Page
    let communityDetails: CommunityDetailsPage
    let communitiesList: CommunitiesList
    let communityTopNavMenu: CommunityTopNavMenu
    let urlsConst: Urls
    let communityMembersConst: CommunityMembers
    let communityMembers: CommunityMembersPage

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        communitiesList = new CommunitiesList(page);
        communityDetails = new CommunityDetailsPage(page)
        urlsConst = new Urls();
        communityMembersConst = new CommunityMembers()
        communityTopNavMenu = new CommunityTopNavMenu(page)
        communityMembers = new CommunityMembersPage(page)
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('New member role creation', async () => {
        await communityDetails.navigate(urlsConst.MANAGE)
        await communitiesList.getCommunityInTheList(communityMembersConst.MEMBERS_COMMUNITY_NAME).click()
        await communityTopNavMenu.navigateTopMenu(communityMembersConst.MEMBER_SECTION).click()
        await communityMembers.createMemberRole(communityMembersConst.MEMBER_ROLE);
        await (expect (communityMembers.memberRoleTitle(communityMembersConst.MEMBER_ROLE)).toBeVisible())
    })

    test('New member role edit', async () => {
        await communityMembers.editMembersRole(communityMembersConst.MEMBER_ROLE, communityMembersConst.MEMBER_ROLE_UPDATED);
        await (expect (communityMembers.memberRoleTitle(communityMembersConst.MEMBER_ROLE_UPDATED)).toBeVisible())
    })

    test('Second role creation', async () => {
        await communityMembers.createMemberRole(communityMembersConst.MEMBER_ROLE_SECOND);
        await (expect (communityMembers.memberRoleTitle(communityMembersConst.MEMBER_ROLE_SECOND)).toBeVisible())
    })

    test('Search INVALID MEMBER name', async () => {
        await communityMembers.searchField.fill(communityMembersConst.INVALID_MEMBER_NAME);
        await (expect (communityMembers.invalidSearchResult(communityMembersConst.INVALID_SEARCH_RESULT)).toBeVisible())
        await communityMembers.searchField.clear()
    })

    test('Invite member from the list', async () => {
        await communityMembers.addMemberFromTheList(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_SEARCH,communityMembersConst.MEMBER_ROLE_SECOND);
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME)).toBeVisible())
    })

    test('Search valid MEMBER name', async () => {
        await communityMembers.searchField.fill(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_SEARCH);
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME)).toBeVisible())
        await communityMembers.searchField.clear()
    })

    test('Update FIRST NAME member invite from the list', async () => {
        await communityMembers.updateMemberFistName(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME,communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME_UPDATE );
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME_UPDATE)).toBeVisible())
        await communityMembers.updateMemberFistName(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME_UPDATE,communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME );
    })

    test('Invite member by email', async () => {
        await communityMembers.inviteMemberByEmail(communityMembersConst.INVITE_BY_EMAIL,communityMembersConst.INVITE_BY_EMAIL_FIRST_NAME,communityMembersConst.INVITE_BY_EMAIL_LAST_NAME, communityMembersConst.MEMBER_ROLE_UPDATED);
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_BY_EMAIL_FIRST_NAME)).toBeVisible())
    })

    test('Member invited by email Deletion', async () => {
        await communityMembers.deleteMember(communityMembersConst.INVITE_BY_EMAIL_FIRST_NAME);
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_BY_EMAIL_FIRST_NAME)).not.toBeVisible())
    })

    test('Member from the list Deletion', async () => {
        await communityMembers.deleteMember(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME);
        await (expect (communityMembers.findMemberInTheList(communityMembersConst.INVITE_FROM_THE_LIST_MEMBER_FIRST_NAME)).not.toBeVisible())
    })


    test('New member role deletion', async () => {
        await page.reload()
        await communityMembers.deleteMembersRole(communityMembersConst.MEMBER_ROLE_UPDATED);
        await (expect (communityMembers.memberRoleTitle(communityMembersConst.MEMBER_ROLE_UPDATED)).not.toBeVisible())
    })

    test('Second role deletion', async () => {

        await communityMembers.deleteMembersRole(communityMembersConst.MEMBER_ROLE_SECOND);
        await (expect (communityMembers.memberRoleTitle(communityMembersConst.MEMBER_ROLE_SECOND)).not.toBeVisible())
    })


})