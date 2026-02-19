import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    readonly page : Page
    readonly dashboardText:Locator

    constructor(page:Page)
    {
        this.page = page;
        this.dashboardText = page.getByRole('heading',{name:'Dashboard'})
    }



}