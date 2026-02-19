import {test as basetest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { UserPage } from '../pages/UserPage'
import { LeftNavigationPage } from '../pages/LeftNavigationPage'
import { PimPage } from '../pages/PimPage'

type pomFixtureType = {
    loginPage: LoginPage
    dashboardPage:DashboardPage
    userPage: UserPage
    leftNavigationPage:LeftNavigationPage
    pimPage:PimPage
}

export const test = basetest.extend<pomFixtureType>({
    loginPage:async({page},use) =>{
        use(new LoginPage(page))
    },
    dashboardPage:async({page},use)=> {
        use(new DashboardPage(page))
    },
    userPage:async({page},use)=>{
        use(new UserPage(page))
    },
    leftNavigationPage:async({page},use) =>{
        use(new LeftNavigationPage(page))
    },
    pimPage:({page},use) => {
        use(new PimPage(page))
    }

})