export { };

declare global{
    namespace NodeJS{
        interface env{
            BROWSER:"chromium" | "firefox" | "webkit"
            ENV:"test" | "dev" | "stage"
            BASE_URL:string
            //HEADLESS:"true" | "false"
        }
    }
}