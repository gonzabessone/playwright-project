//to run: npx playwright test test-alerts.spec.ts --headed
import { expect, test } from '@playwright/test'

test.describe('Example of test alerts', () => {
    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Example of testing alerts', async ({ page })=>{
        await page.getByRole('link', {name: 'Alerts', exact:true}).click()
        await expect(page).toHaveTitle(/Alerts/)
        // Test alert
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert')
            await dialog.accept()
        })
        await page.getByRole('button', { name: 'Alert' }).click()
        // Test confirm
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm')
            await dialog.accept()
        })
        await page.getByRole('button', { name: 'Confirm' }).click()
        // Test prompt
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt')
            await dialog.accept('dogs')
            console.log(`Prompt: ${dialog.message()}`)
        })
        //Test last dialog
        page.once('dialog', async dialog =>{
            expect(dialog.message()).toContain('dogs')
        })
        await page.getByRole('button', { name: 'Prompt' }).click()
        
        })

})

