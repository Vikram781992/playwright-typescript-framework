import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    get userNameInput(): Locator { 
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    get passwordInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }

    get submitButton(): Locator {
        return this.page.getByRole('button', { name: 'Login' });
    }

    get invalidCredentialsErrorPopup(): Locator {
        return this.page.getByText('Invalid credentials', { exact: true });
    }

    async navigateToPage() {
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }

    async loginToPage(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
