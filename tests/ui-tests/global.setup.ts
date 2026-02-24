import { expect } from '@playwright/test';
import {test} from '../../fixtures/hooks-fixture';

test('global setup', async({page,loginPage,commonUtils,dashboardPage}) => {

    const encrUsername = commonUtils.encryptData("admin");
    const encrPassword = commonUtils.encryptData("admin123");

    const decryptUsername = commonUtils.decryptData(encrUsername!);
    const decryptPassword = commonUtils.decryptData(encrPassword!);

    await loginPage.navigateToPage()
    await loginPage.loginToPage("admin","admin123")
    await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`)
    await expect(dashboardPage.dashboardText).toHaveText('Dashboard')
    //important 
    await page.context().storageState({
        path:'./playwright/.auth/auth.json'
    })
})


//use the hooks fixture in below test 

