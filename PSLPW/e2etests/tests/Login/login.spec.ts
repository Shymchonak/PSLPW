import { test, expect, Page } from '@playwright/test';
import { StartPage } from '../../pageObjects/startPage';
import { DashboardPage } from '../../pageObjects/dashboardPage';
import { Login, Dashboard } from '../../testData/constants'


test.use({ storageState: undefined });

test.describe('Valid/invalid login', () => {

    let startPage: StartPage;
    let dashboardPage: DashboardPage;
    let loginConstants: Login;
    let dashboardConstants: Dashboard;

    test.beforeEach(async ({ page }) => {
        startPage = new StartPage(page);
        dashboardPage = new DashboardPage(page);
        loginConstants = new Login();
        dashboardConstants = new Dashboard();
        await page.context().clearCookies();
        await startPage.navigate(loginConstants.BASE_URL);
    });

    test('Invalid login', async ({page: Page}) => {
        await startPage.loginProcess(loginConstants.INVALID_EMAIL, loginConstants.INVALID_PASSWORDS)
        await expect( await startPage.notificationMessage.textContent()).toContain(loginConstants.NOTIFICAION_MESSAGE);
    });

    test('Valid login', async ({page:Page}) => {

        await startPage.loginProcess(loginConstants.VALID_EMAIL, loginConstants.VALID_PASSWORD)
        await expect( await dashboardPage.logoutButton.textContent()).toContain(dashboardConstants.logoutButton);
    });

});
