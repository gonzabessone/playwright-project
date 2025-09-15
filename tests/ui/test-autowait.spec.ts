//to run: npx playwright test test-autowait.spec.ts --headed
import { test, expect } from '@playwright/test'

test.describe('Example of testing autowait', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Autowait functionality', async ({ page }) => {
        await page.getByRole('link', { name: 'Auto Wait', exact: true }).click()
        await expect(page).toHaveTitle(/Auto Wait/)
        
        const dropDown = page.locator('#element-type')
        const locatorStatus = page.locator('#opstatus')
        
        await expect(dropDown).toHaveValue('button')
        await page.locator('#applyButton3').click()
        await expect(locatorStatus).toHaveText('Target element state restored.')
        
        await page.getByLabel('Choose an element type:').selectOption('Input')
        await page.getByRole('checkbox', {name: 'Enabled'}).click()
        await page.locator('#applyButton3').click()
        await expect(locatorStatus).toHaveText('Target element state restored.')
        
        await page.getByLabel('Choose an element type:').selectOption('Textarea')
        await page.getByRole('checkbox', {name: 'On Top'}).click()
        await page.locator('#applyButton5').click()
        await expect(locatorStatus).toHaveText('Target element state restored.', {timeout: 7000})
        
        await page.getByLabel('Choose an element type:').selectOption('Select')
        await page.getByRole('checkbox', {name: 'Visible'}).click()
        await page.locator('#applyButton5').click()
        await expect(locatorStatus).toHaveText('Target element state restored.', {timeout: 7000})
    })


})