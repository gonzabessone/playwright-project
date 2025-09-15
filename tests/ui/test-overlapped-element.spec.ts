//to run : npx playwright test test-overlapped-element.spec.ts --headed
import {test, expect} from '@playwright/test';

test.describe('Example of overlapped elements', () => {

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Overlapped Element', async ({page})=>{
        await page.getByRole('link', {name:'Overlapped Element', exact: true}).click()
        await expect(page).toHaveTitle(/Overlapped Element/)
        await page.locator('#id').click();
        await page.locator('#id').fill('Test')
        await expect(page.locator('#id')).toHaveValue('Test')
        const input2 = page.locator("input#name")
        await input2.scrollIntoViewIfNeeded()
        await input2.click()
        await input2.fill('Test')
        await expect(input2).toHaveValue('Test')
        await expect(input2).toBeInViewport()
    })

})