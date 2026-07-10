import { Page } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) {}

    async launchApplication() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com");
    }
}

//import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    override async launchApplication() {

        console.log("Launching OrangeHRM Application...");

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
}

//create spec.ts file and try to execute 

import { test } from '@playwright/test';
//import { LoginPage } from './LoginPage';

test('Override Example', async ({ page }) => {

    const login = new LoginPage(page);

    await login.launchApplication();

});