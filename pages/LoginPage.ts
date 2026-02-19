import { Page,Locator } from "@playwright/test";

export class LoginPage{

    readonly page:Page
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator; 
    readonly invalidCredentialsErrorPopup:Locator;
    constructor(page:Page)
    {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorPopup = page.getByText('Invalid credentials', { exact: true })
    }

    async navigateToPage()
    {
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }

    async loginToPage(username:string,password:string)
    {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

}