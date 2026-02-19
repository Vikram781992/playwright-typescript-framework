import {expect, test} from '../fixtures/hooks-fixture'

test.use({
    storageState:{
        cookies:[],
        origins:[]
    }

})

test('visual testing',{tag:'@visual',annotation:{type:'',description:''}},async({gotoURL,loginPage,commonUtils, leftNavigationPage,pimPage})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.loginToPage(username,password);
    await expect(leftNavigationPage.orangeHRMLogo).toHaveScreenshot('orangehtmlogo.png')



})