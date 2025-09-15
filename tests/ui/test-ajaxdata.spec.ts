//to run : npx playwright test test-ajaxdata.spec.ts --headed
import {test, expect} from '@playwright/test'



test.describe('Example of AJAX data', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('AJAX data', async ({page})=>{
        test.setTimeout(60000)
        await page.getByRole('link', {name:'AJAX Data', exact: true}).click()
        await page.getByRole('button', {name: 'Button Triggering AJAX Request', exact:true}).click()
        await expect(page).toHaveTitle(/AJAX Data/)
        const textAjax = page.getByText('Data loaded with AJAX get request.');
        await expect(textAjax).toBeVisible({timeout: 30000});
    })

})

