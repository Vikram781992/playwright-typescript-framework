import {test as basetest } from './pom-fixtures' 
import CommonUtils from '../utils/CommonUtils'
import commonApiUtils from '../utils/CommonApiUtils'


type CommonFixtureType = {
    commonUtils:CommonUtils
    commonApiUtuls:commonApiUtils
}

export const test = basetest.extend<CommonFixtureType>({
commonUtils:async({},use) =>{
    use(new CommonUtils())
},
commonApiUtuls:async({request},use)=>{
    use(new commonApiUtils(request))
}

})