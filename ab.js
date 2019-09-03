const puppeteer = require('puppeteer');

(async () => {
    var startDate = new Date();

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
//   await page.screenshot({path: 'example.png'});

// Do your operations
var endDate   = new Date();
    console.log(endDate - startDate)
    await browser.close();
})();