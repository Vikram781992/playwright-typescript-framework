import {Page} from "@playwright/test";

export default class PlaywrightWrapper{
    constructor(private page:Page){}

    async goto(url:string){
        await this.page.goto(url,{ waitUntil: 'domcontentloaded'});
    }

    async waitAndClick(locator:string){
        const element = this.page.locator(locator);
        await element.waitFor({ state: 'visible' });
        await element.click();
    }

    async navigateTo(linkText:string){

        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle' }),
            this.page.getByRole('link', { name: linkText }).click()
        ])

    }

}