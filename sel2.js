const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until,Capabilities} = require('selenium-webdriver');
const geckoDriverPath  = require('chromedriver').path;

let service = new chrome.ServiceBuilder(geckoDriverPath ).build();
chrome.setDefaultService(service);

(async function example() {
    let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
        console.log('ok')
     } finally {
        await driver.quit();
     }
  })();