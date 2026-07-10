import { Page } from '@playwright/test';

class LoginPage {

    constructor(private page: Page) {}

    login(username: string, password: string): Promise<void>;
    login(token: string): Promise<void>;

    async login(value1: string, value2?: string): Promise<void> {

        if (value2) {

            await this.page.fill('#username', value1);
            await this.page.fill('#password', value2);
            await this.page.click('#login');

        } else {

            console.log(`Login using API Token: ${value1}`);

        }
    }
}