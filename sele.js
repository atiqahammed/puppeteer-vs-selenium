var webdriver = require('selenium-webdriver');
var ie = require('selenium-webdriver/ie');
var path = require('iedriver').path;


let driver = new webdriver.Builder()
  .setIeOptions(new ie.Options().setExtractPath(path))
  .build();


await driver.get('https://www.baidu.com/');
// var webdriver = require('selenium-webdriver');

// var driver = new webdriver.Builder().forBrowser('internet explorer').build();

  (async function example() {
    let driver = new webdriver.Builder().forBrowser('internet explorer').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
        console.log('ok')
     } finally {
        await driver.quit();
     }
  })();