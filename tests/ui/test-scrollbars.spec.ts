//to run : npx playwright test test-scrollbars.spec.ts --headed
import {test, expect} from '@playwright/test'

test.describe('How to interact with scrollbars', ()=>{


    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Finding a button with scrollbars', async({page})=>{
        await page.getByRole('link',{name: 'Scrollbars', exact:true}).click()
        await expect(page).toHaveTitle(/Scrollbars/)
        await page.getByRole('button',{name: 'Hiding Button', exact:true} ).scrollIntoViewIfNeeded()
        await expect(page.locator('#hidingButton')).toBeInViewport();
        await page.click('#hidingButton')
        })
})