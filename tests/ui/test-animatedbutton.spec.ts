//to run: npx playwright test test-animatedbutton.spec.ts --headed
import { test, expect } from '@playwright/test'

test.describe('Example of animated buttons', async ()=>{
    test.beforeEach( async ({ page })=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
})

    test('Animated button', async ({page})=>{
        const animationStatus = page.locator('#opstatus')
        const buttonMoving = page.getByRole('button', {name: 'Moving Target'})
        
        await page.getByRole('link', {name: 'Animated Button'}).click()
        await expect(page).toHaveTitle(/Animated Button/)
        await page.getByRole('button', {name: 'Start Animation', exact:true}).click()
        await expect(animationStatus).toHaveText('Animation done', {timeout: 10000})
        await expect(buttonMoving).not.toHaveClass(/spin/)
    })

})