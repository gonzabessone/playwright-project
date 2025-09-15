//to run: npx playwright test test-shadow-dom.spec.ts --headed
import { test, expect } from '@playwright/test'


test.describe('Example of testing shadow dom', ()=>{
    test.beforeEach(async ({ page })=>{
        await page.goto('/')
        expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Shadow DOM', async ({ page })=>{
        await page.getByRole('link', { name: 'Shadow DOM', exact: true }).click()
        await expect(page).toHaveTitle(/Shadow DOM/)
        await page.waitForSelector('guid-generator')
        
        const shadowHost = page.locator('guid-generator')
        await shadowHost.locator('button').first().click()
        
        const inputValue = await shadowHost.locator('input').inputValue()
        
        await shadowHost.locator('button').nth(1).click()
        
        expect(inputValue).toBeTruthy()
        expect(inputValue.length).toBe(36)
        await shadowHost.screenshot({path:'tests/ui/screenshots/guidgenerated.png'})
})
})