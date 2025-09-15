//to run : npx playwright test test-dynamic-id.spec.ts --headed

import {test,expect} from '@playwright/test'

test.describe('Hook to validate Dynamic ID', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    //taking a screenshot of the button
    test('Dynamic Id', async({ page })=>{
        await page.getByRole('link', {name:'Dynamic ID', exact: true}).click()
        const button1 = page.getByRole('button', {name:'Button with Dynamic ID'})
        await expect(button1).toBeVisible()
        await expect(button1).toHaveText('Button with Dynamic ID')
        await button1.screenshot({path: 'screenshots/button_with_dynamic_id.png'})
    }) 
})

