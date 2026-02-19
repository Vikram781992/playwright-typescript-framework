import {test as basetest } from './pom-fixtures' 
import CommonUtils from '../utils/common-util'


type CommonFixtureType = {
    commonUtils:CommonUtils
}

export const test = basetest.extend<CommonFixtureType>({
commonUtils:async({},use) =>{

    use(new CommonUtils())

}


})