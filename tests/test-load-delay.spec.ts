//to run : npx playwright test test-hidden-layers.spec.ts --headed

import { test, expect } from '@playwright/test'

test.describe('Load delay example',()=>{
    
    test.beforeEach(async ({page})=> {
        await page.goto('http://www.uitestingplayground.com/')
    })

    test('Load delay', async ({page})=>{
        await page.getByRole('link', {name:'Load Delay', exact:true}).click()
        await expect(page).toHaveURL('http://www.uitestingplayground.com/loaddelay')
    })


})