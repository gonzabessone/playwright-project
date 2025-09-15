//to run : npx playwright test test-verify-text.spec.ts --headed

import {test, expect} from '@playwright/test'

test.describe('Example of verify text', ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Verify Text', async ({page})=>{
        await page.getByRole('link', {name: 'Verify Text', exact: true}).click()
        await expect(page).toHaveTitle(/Verify Text/)
        await expect(page.locator("//span[normalize-space()='UserName']")).toContainText('UserName')
    })
})