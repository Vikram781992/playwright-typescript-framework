import { Browser, LaunchOptions,chromium,firefox,webkit } from "@playwright/test"


const options:LaunchOptions = {
    headless:false,
}

export const invokeBrowser = async():Promise<Browser> =>{
    const browserType = process.env.BROWSER;
    switch(browserType)
    {
        case "chromium":
            return chromium.launch(options)
        case "firefox":
            return firefox.launch(options)
        case "webkit":
            return webkit.launch(options)
            default:
                throw new Error(`Invalid browser type: ${browserType}`);
    }

}