import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage{
    readonly page:Page
    readonly pimLink:Locator
    readonly orangeHRMLogo:Locator
    
    constructor(page:Page)
    {
        this.page = page;
        this.pimLink = page.locator('span').filter({ hasText: 'PIM' }).first();
        this.orangeHRMLogo = page.getByRole('img', { name: 'client brand banner' });
    }

    async clickPimLink()
    {
        await this.pimLink.click();
    }
}