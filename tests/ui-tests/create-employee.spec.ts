import {expect, test} from '../../fixtures/hooks-fixture'
import empl from '../../data/add-employee-data.json'

test('create employee',{
    tag:['@ui','@UAT'],
    annotation:{
                type:'test case link', 
                description: 'test URL link'
            }
    },async({gotoURL,leftNavigationPage,pimPage}) =>{

    await leftNavigationPage.clickPimLink();
    await pimPage.CreateEmployee(empl.firstName,empl.middleName,empl.lastName,empl.empId)
    expect(pimPage.username).toHaveText(`${empl.firstName} ${empl.lastName}`)
})