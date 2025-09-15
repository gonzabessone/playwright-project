//to run : npx playwright test test-click.spec.ts --headed
import {test, expect} from '@playwright/test'



test.describe('Example of Clicks on automation', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Click', async ({page})=>{
        await page.getByRole('link', {name:'Click', exact: true}).click()
        await page.getByRole('button', { name: 'Button That Ignores DOM Click Event', exact: true }).click()
        await expect(page).toHaveTitle(/Click/)
        await expect(page.locator("//button[@id='badButton']")).toHaveClass('btn btn-success')
    })
})

