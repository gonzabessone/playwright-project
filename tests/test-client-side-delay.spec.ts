//to run : npx playwright test test-client-side-delay.spec.ts --headed
import {test, expect} from '@playwright/test'



test.describe('Example of Client Side Delay', () =>{


    test.beforeEach(async ({ page }) =>{
        await page.goto('http://www.uitestingplayground.com/')
    })



    test('Client side delay', async ({page})=>{
        await page.getByRole('link', {name:'Client Side Delay', exact: true}).click()
        await page.getByRole('button', {name: 'Button Triggering Client Side Logic', exact:true}).click()
        await expect(page).toHaveTitle(/Client Side Delay/)
        await expect(page.getByText('Data calculated on the client side.')).toBeVisible({timeout: 17000})
    })

})

