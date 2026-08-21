import { Locator, Page } from "@playwright/test";
import AbstractPage from "./Abstract/AbstractPage";

export class DashboardPage extends AbstractPage{

    readonly page : Page
    readonly dashboardText:Locator

    constructor(page:Page)
    {
        super(page);
        this.page = page;
        this.dashboardText = page.getByRole('heading',{name:'Dashboard'})
    }
}