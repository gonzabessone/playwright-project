//to run: npx playwright test test-uploadfiles.spec.ts --headed

import { test, expect } from '@playwright/test'
import path from 'path'

test.describe('Example of uploading files', ()=>{
    
    test.beforeEach(async ({ page })=>{
        await page.goto('/')
        await expect(page).toHaveTitle(/UI Test Automation Playground/)
    })

    test('Upload a file using Browse Files button', async ({ page }) => {
        await page.getByRole('link', {name: 'File Upload', exact:true}).click()
        const frame = page.frameLocator('iframe')
        const fileInput = frame.locator('input[type="file"]');
        const filePath = path.join(__dirname, 'notepadtext.txt');
        
        await fileInput.setInputFiles(filePath);
        
        await expect(fileInput).toHaveValue(/notepadtext.txt/);
})

})