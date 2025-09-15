//to run : npx playwright test test-mouseover.spec.ts --headed

import {test, expect} from '@playwright/test'

test.describe('Example of mouse over', () =>{
    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('mouse over', async ({ page }) => {
        await page.getByRole('link', { name: 'Mouse Over', exact: true }).click()

        const element = page.locator('[title="Link Button"]')

        //First click
        await element.hover();
        await element.click();
        await expect(page.locator('#clickButtonCount')).toHaveText('1');

        //Second click
        await element.hover(); 
        await element.click();

        const clickCount = page.locator('#clickButtonCount')
        await expect(clickCount).toHaveText('2')
        await expect(page).toHaveTitle(/Mouse Over/)

        const screenshotWeb = page.locator("//div[4]//p[1]")
        await screenshotWeb.screenshot({ path: 'tests/ui/screenshots/mouseover.png' })
    })
})