//to run: npx playwright test test-hiddenlayers.spec.ts --headed
import {test, expect} from '@playwright/test'

test.describe('Example of hidden layers', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Hidden Layers', async ({page})=>{
        await page.getByRole('link', {name:'Hidden Layers', exact: true}).click()
        const button1 = await page.getByRole('button', {name: 'Button'})
        await button1.click()
        await expect(page.locator("//button[@id='blueButton']")).toBeVisible()
        await page.locator('#blueButton').click();
    })
})
