//to run: npx playwright test test-dynamictable.spec.ts --headed

import { test, expect } from '@playwright/test'

test.describe('Example of dynamic table', ()=>{
    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Example of dynamic table', async ({ page }) =>{
        await page.getByRole('link', {name: 'Dynamic Table', exact: true}).click()
        await expect(page).toHaveTitle(/Dynamic Table/)
        
        const chromeCPU = await page.locator('[role="row"]:has-text("Chrome") span').nth(1).textContent()
        const yellowValue = await page.locator('.bg-warning').textContent()
        
        expect(chromeCPU).toBeTruthy()
        expect(yellowValue).toBeTruthy()
    })
})

