const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false});
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');

    await page.fill("//textarea[@id='APjFqb']", 'playwright documents');
    await page.waitForTimeout(5000)
    await page.press("//textarea[@id='APjFqb']", 'Enter');
    await page.waitForSelector('h3');
    await page.getByRole('link', {name: 'Playwright: Fast and reliable',exact: false}).click();
    await page.waitForTimeout(2000)
    await browser.close()
})();