//to run: npx playwright test test-sample-app.spec.ts --headed

import { test, expect } from '@playwright/test';

test.describe('Example of Sample App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Sample App', async ({ page }) => {
        const nameInput = page.getByRole('textbox', {name: 'User name'})
        const pwInput = page.getByRole('textbox', {name: '***'})
        const loginButton = page.getByRole('button', { name: 'Log In', exact: true })
        const loginStatus = page.locator('#loginstatus')

        
        await page.getByRole('link', { name: 'Sample App', exact: true }).click()
        await expect(page).toHaveTitle(/Sample App/)
        await expect(loginStatus).toHaveText("User logged out.")
        await nameInput.fill('Gonzalo')
        await pwInput.fill('pwd')
        await loginButton.click()
        await expect(loginStatus).toHaveText("Welcome, Gonzalo!")
})
})