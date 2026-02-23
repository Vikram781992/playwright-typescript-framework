import { APIRequestContext } from "@playwright/test";
import apipathdata from '../data/api-data/api-path-data.json'
import CommonUtils from "./CommonUtils";

export default class commonApiUtils{

    private request:APIRequestContext
    constructor(request:APIRequestContext)
    {
        this.request = request
    }

    async getToken()
    {
        const commonutils = new CommonUtils();
        const username = commonutils.decryptData(process.env.API_USERNAME!)
        const password = commonutils.decryptData(process.env.API_PASSWORD!)

        const responseToken = await this.request.post(apipathdata.apiTokenPath,{
            data:{
                "username":username,
                "password":password
            }
        })
        return await responseToken.json();
    }
    

}