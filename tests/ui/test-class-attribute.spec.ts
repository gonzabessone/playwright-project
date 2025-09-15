//to run : npx playwright test test-class-attribute.spec.ts --headed

import {test, expect} from '@playwright/test'

test.describe('Example of class attribute', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        expect(page).toHaveTitle(/UI Test Automation Playground/)
    })


    test('Class attribute', async ({ page }) => {
        await page.getByRole('link', { name: 'Class Attribute' }).click()
        page.once('dialog', dialog => dialog.accept())
        await page.locator("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").click()
        await page.waitForTimeout(1000)
        await expect(page).toHaveTitle(/Class Attribute/)
})
})
