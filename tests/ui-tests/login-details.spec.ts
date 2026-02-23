import {test,expect} from '../../fixtures/hooks-fixture'
import loginmoduledata from '../../data/login-module-data.json'
test.use({
    storageState:{
        cookies:[],
        origins:[]
    }
})

test('login test with invalid username', async ({commonUtils,gotoURL,loginPage})=>{
    const username = commonUtils.decryptData(process.env.User_Name!);
    await loginPage.loginToPage(username,loginmoduledata.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginmoduledata.InvalidCredentialsData)
    await expect(loginPage.userNameInput).toBeVisible();
})