import { Locator, Page } from "@playwright/test";

export class PimPage
{
    readonly page:Page
    readonly addEmployeeButton : Locator
    readonly firstNameTextField : Locator
    readonly MiddleNameTextField : Locator
    readonly lastNameTextField : Locator
    readonly saveButton: Locator
    readonly empIdTextField:Locator
    readonly username:Locator

    constructor(page:Page)
    {
        this.page = page;
        this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
        this.firstNameTextField = page.getByRole('textbox', { name: 'First Name' })
        this.MiddleNameTextField = page.getByRole('textbox', { name: 'Middle Name' })
        this.lastNameTextField = page.getByRole('textbox', { name: 'Last Name' })
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.empIdTextField = page.locator('input.oxd-input.oxd-input--focus')
        this.username = page.locator('.orangehrm-edit-employee-name');
    }

    async CreateEmployee(firstname:string,middlename:string,lstname:string,empId:string)
    {
        await this.addEmployeeButton.click();
        await this.firstNameTextField.fill(firstname);
        await this.MiddleNameTextField.fill(middlename);
        await this.lastNameTextField.fill(lstname);
        //await this.empIdTextField.fill(empId);
            await this.saveButton.click();
    }
}