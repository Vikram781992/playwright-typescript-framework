import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import {test as baseTest} from './common-fixture'


type HookFixtureType = {
    gotoURL: LoginPage;
    logout: UserPage;
}

export const test = baseTest.extend<HookFixtureType>({
gotoURL:async({loginPage},use)=>{
    await loginPage.navigateToPage();
    await use(loginPage)
},

logout:async({userPage},use) =>{
    await use(userPage);
    await userPage.logout()
}
})

export {expect} from '@playwright/test'