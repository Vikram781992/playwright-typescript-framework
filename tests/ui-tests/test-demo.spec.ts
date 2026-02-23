import { expect } from '@playwright/test';
//import {test} from '../fixtures/common-fixture';

import {test } from '../../fixtures/hooks-fixture'
// test.beforeEach('Before each hook', async({loginPage}) =>{
//      await loginPage.navigateToPage()
// })
// test.afterEach('after each test', async({userPage}) =>{
//     await userPage.logout();
// })
// test('test demo login', async({page,loginPage,commonUtils})=>{
//     //to get environement variables 
//     console.log(process.env.BASE_URL);
//     console.log(process.env.USER_NAME);
//     console.log(process.env.PASSWORD);
    //key = wishinfinite
   //const commonUtils = new CommonUtils()
//    commonUtils.encryptData('admin123');
//console.log(commonUtils.decryptData(process.env.USER_NAME!))
//const username = (commonUtils.decryptData(process.env.USER_NAME!))
//console.log(commonUtils.decryptData(process.env.USER_NAME!))
//const password = commonUtils.decryptData(process.env.PASSWORD!)
//     await loginPage.navigateToPage()
//     console.log(await page.title())
//     // we have done a global setupp it removes the duplicate login step 
//     //await loginPage.loginToPage(username,password);
// })


test.describe("Verify Page Title tests",
    {tag:['@UI_Login'],
        annotation:{type:'test',
        description:'login'}
    },
    ()=>
{
    test('test demo login 2',{tag:['@ui','@UAT']}, async({page,gotoURL})=>{
        await test.step('verify Title of page',async()=>{
            //await loginPage.navigateToPage()  ///this is included on brfore each 
            await expect(page).toHaveTitle('OrangeHRM')
        })
    })

    test('test demo login 3',{
        tag:['@ui','@UAT'],
        annotation:{type:'test link',description:'actual link to test case'}
        }, 
        async({page,gotoURL,logout})=>{
            await test.step('verify the title of page',async()=>{                            //how to add a test step in the report displayed 
                //await loginPage.navigateToPage()  //included in before each
                await expect(page).toHaveTitle('OrangeHRM')  
            })
    })

})

