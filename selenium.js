const {Builder, By, Key, until} = require('selenium-webdriver');
const numberOfInstance = 10;

let browserLoadTime = new Array();
let googlePageVisitTime = new Array();



let startTime;
let endTime;

async function runBrowser() {

    startTime = new Date();
    let driver = await new Builder().forBrowser('firefox').build();
    endTime = new Date();

    browserLoadTime.push(endTime - startTime);
    
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
}


(async function test() {
    for(let i = 0; i < numberOfInstance; i++) {

        await runBrowser();
    
    }

    console.log(browserLoadTime)

})();


