import { Page } from '@playwright/test';

export class Base {
    constructor(public page: Page) {}

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }
}

