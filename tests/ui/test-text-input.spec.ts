//to run : npx playwright test test-text-input.spec.ts --headed
import {test, expect} from '@playwright/test'



test.describe('Example of Text Input', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Text input', async ({page})=>{
        await page.getByRole('link', {name:'Text Input', exact: true}).click()
        await page.getByRole('textbox').click()
        await page.getByRole('textbox').fill('Button that should change its name')
        await page.locator("//button[@id='updatingButton']").click()
        await expect(page.getByRole('button')).toHaveText('Button that should change its name')
        await expect(page).toHaveTitle(/Text Input/)
        
    })


})

