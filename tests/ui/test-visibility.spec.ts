//to run: npx playwright test test-visibility.spec.ts --headed
import {test, expect} from '@playwright/test'

test.describe('Example of Visibility of elements', () =>{
    test.beforeEach(async ({ page }) =>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Visibility of elements', async ({ page }) => {
        const hideButton = page.locator('#hideButton')
        const opacityButton = page.locator('#transparentButton')
        const removeButton = page.locator('#removedButton')
        const zeroWidthButton = page.locator('#zeroWidthButton')
        const overlappedButton = page.locator('#overlappedButton')
        const visibilityHiddenButton = page.locator('#invisibleButton')
        const dispplayNoneButton = page.locator('#notdisplayedButton')
        const offscreenButton = page.locator('#offscreenButton')

        await page.getByRole('link', { name: 'Visibility', exact: true }).click()

        // Check initial visibility
        await expect(hideButton).toBeVisible()
        await expect(opacityButton).toBeVisible()
        await expect(removeButton).toBeVisible()
        await expect(zeroWidthButton).toBeVisible()
        await expect(overlappedButton).toBeVisible()
        await expect(visibilityHiddenButton).toBeVisible()
        await expect(dispplayNoneButton).toBeVisible()
        await expect(offscreenButton).toBeVisible()

        await hideButton.click()
        await expect(opacityButton).toBeVisible()
        await expect(removeButton).not.toBeVisible()
        await expect(zeroWidthButton).not.toBeVisible()
        await expect(overlappedButton).toBeVisible()
        await expect(visibilityHiddenButton).not.toBeVisible()
        await expect(dispplayNoneButton).not.toBeVisible()
        await expect(offscreenButton).toBeVisible()
        const table = page.locator("table[width='100%']")

        await table.screenshot({ path: 'tests/ui/screenshots/visibility.png' })
        await expect(page).toHaveTitle(/Visibility/)
    })
})