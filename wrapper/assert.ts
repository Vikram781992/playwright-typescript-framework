import { expect, Page } from "@playwright/test";

export default class Assert {

    constructor(private page: Page){}

    async assertTitle(expectedTitle:string){
        expect(this.page).toHaveTitle(expectedTitle);
    }

    async titleContains(expectedString:string){
       const currentTitle = await this.page.title()
       expect(currentTitle).toContain(expectedString);   
     }

    async assertURL(expectedURL:string){
        expect(this.page).toHaveURL(expectedURL);
    }

     async assertURLContain(expectedString:string){
       const currentUrl = await this.page.url()
       expect(currentUrl).toContain(expectedString);   
     }



}