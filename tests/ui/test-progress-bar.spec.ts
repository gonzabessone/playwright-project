//to run : npx playwright test test-progress-bar.spec.ts --headed

import {test, expect} from '@playwright/test'

test.describe('Example of progress bar', ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Progress Bar', async ({page})=>{
        await page.getByRole('link', {name: 'Progress Bar', exact: true}).click()
        await expect(page).toHaveTitle(/Progress Bar/)
        // Start
        await page.getByRole('button', { name: 'Start' }).click()
        let value = 0
        while (value < 75) {
        value = parseInt(await page.getByRole('progressbar').getAttribute('aria-valuenow') || '0')
        await page.waitForTimeout(100)
        }
        await page.getByRole('button', { name: 'Stop' }).click()
        
        const finalValue = parseInt(
            await page.getByRole('progressbar').getAttribute('aria-valuenow') || '0'
        )
        
        expect(finalValue).toBeGreaterThanOrEqual(74)
        expect(finalValue).toBeLessThanOrEqual(76)
        
        // Screenshot
        await page.screenshot({ path: 'tests/ui/screenshots/progress-bar.png' })
        })
})