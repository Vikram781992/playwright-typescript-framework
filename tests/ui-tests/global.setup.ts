import { expect } from '@playwright/test';
import {test} from '../../fixtures/hooks-fixture';

test('global setup', async({page,loginPage,commonUtils,dashboardPage}) => {

    const decryptUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.navigateToPage()
    await loginPage.loginToPage(decryptUsername,decryptPassword)
    await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`)
    await expect(dashboardPage.dashboardText).toHaveText('Dashboard')
    //important 
    await page.context().storageState({
        path:'./playwright/.auth/auth.json'
    })
})


//use the hooks fixture in below test 

