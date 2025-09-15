import { Page } from '@playwright/test'


export class LoginPage {
    private page: Page;
    constructor (page: Page){
        this.page = page;

    }

    async navigate(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async login(username: string, password: string){
        await this.page.locator('#login2').click()
        await this.page.fill('#loginusername', username)
        await this.page.fill('#loginpassword', password)
        await this.page.locator("button[onclick='logIn()']").click()
    }

    async isErrorVisible(): Promise <boolean>{
        return await this.page.locator('#error_box').isVisible()
    }
}