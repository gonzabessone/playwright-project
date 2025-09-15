//to run : npx playwright test test-validate-title.spec.ts --headed

import {test,expect} from '@playwright/test'

test.describe('Hook to validate title', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Validate title', async ({ page })=>{
        await expect(page).toHaveTitle(/Automation Playground/)
    })
})
