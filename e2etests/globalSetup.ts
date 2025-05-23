import { Page, chromium } from '@playwright/test';
import type { FullConfig } from '@playwright/test';
import { StartPage } from "./pageObjects/startPage";
import { Login, Dashboard } from "../e2etests/testData/constants";
import { DashboardPage } from "./pageObjects/dashboardPage";


export default async (config: FullConfig) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    let startPage: StartPage
    let loginConstants: Login
    let dashboardPage: DashboardPage
    let dashboardConstants: Dashboard

    startPage = new StartPage(page)
    loginConstants = new Login();
    dashboardConstants = new Dashboard()
    dashboardPage = new DashboardPage(page)
    // Выполняем логин один раз
    await startPage.navigate(loginConstants.BASE_URL);
    await startPage.loginProcess(loginConstants.VALID_EMAIL, loginConstants.VALID_PASSWORD)

    await page.waitForSelector(dashboardConstants.FOR_LOGIN_CHECK);
    // Сохраняем состояние сессии
    await context.storageState({ path: './e2etests/state.json' });
    await browser.close();
};