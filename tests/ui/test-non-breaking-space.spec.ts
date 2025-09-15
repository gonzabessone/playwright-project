//to run: npx playwright test test-non-breaking-space.spec.ts --headed

import {test,expect} from '@playwright/test'

test.describe('Example of non breaking spaces', async ()=>{
    
    test.beforeEach(async ({ page })=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Non breaking spaces', async({ page })=>{
        await page.getByRole('link', {name: 'Non-Breaking Space', exact:true}).click()
        await expect(page).toHaveTitle(/Non-Breaking Space/)
        const buttonLocator = page.locator("//button[text()='My\u00A0Button']")
        await expect(buttonLocator).toBeVisible()
    })
})