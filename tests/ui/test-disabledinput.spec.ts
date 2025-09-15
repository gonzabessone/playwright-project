//to run: npx playwright test test-disabledinput.spec.ts --headed
import {test, expect} from '@playwright/test'

test.describe('Example of disables input', async()=>{

    test.beforeEach(async ({ page })=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Disables input', async ({ page })=>{
        await page.getByRole('link', {name: 'Disabled Input', exact:true}).click()
        expect(page).toHaveTitle(/Disabled Input/)
        const buttonLocator = page.getByRole('button', {name: 'Enable Edit Field with 5 seconds delay'})
        const inputState = page.locator('#opstatus')
        const inputField= page.locator('#inputField')
        await buttonLocator.click()
        expect(inputState).toHaveText('Input Disabled...')
        await expect(inputField).toBeEnabled({ timeout: 10000 })
        await inputField.fill('Hello world')
        await inputField.press('Enter')
        expect(inputState).toHaveText('Value changed to: Hello world')
    })
})
