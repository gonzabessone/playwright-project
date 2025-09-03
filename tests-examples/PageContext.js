const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false});

    //context 1 google
    const contextgoogle = await browser.newContext();
    const pagegoogle = await contextgoogle.newPage();
    await pagegoogle.goto('https://www.google.com');
    await pagegoogle.waitForTimeout(5000);
    console.log("Context 1 Opened");

    //context 2 wikipedia
    const wikipedia = await browser.newContext();
    const pagewikipedia = await wikipedia.newPage();
    await pagewikipedia.goto('https://www.wikipedia.org');
    await pagewikipedia.waitForTimeout(5000);
    console.log("Context 2 Opened");

    await browser.close();
    console.log("Browsers are now closed");
})();
