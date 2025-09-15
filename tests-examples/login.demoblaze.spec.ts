import {test, expect} from '@playwright/test'
import { LoginPage } from './pom.spec'

test('Login on demoblaze', async({page})=>{
    const logPage = new LoginPage(page);
    await logPage.navigate()

    await logPage.login('gonzalo@gmail.com', '12345')
    
    await logPage.isErrorVisible()
})