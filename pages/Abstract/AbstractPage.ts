import {Locator, Page} from "@playwright/test";

export default class AbstractPage {

constructor(public page: Page) {}

private get submitButtonLocator(): Locator {
    return this.page.locator("//input[@type='submit']");
}

protected async getPageTitle(){
    return await this.page.title();
}

protected async getByGroupRoleAndText(locatortext: string, textToFind:string): Promise<Locator> {
    return this.page.getByRole("listitem", { name: locatortext }).getByText(textToFind);
}

}