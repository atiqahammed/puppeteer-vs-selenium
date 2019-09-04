const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until,Capabilities} = require('selenium-webdriver');
const geckoDriverPath  = require('chromedriver').path;

let service = new chrome.ServiceBuilder(geckoDriverPath ).build();
chrome.setDefaultService(service);

const numberOfInstance = 2;
const fs = require('fs');

let rawdata = fs.readFileSync('info.json');
let info = JSON.parse(rawdata);

let output = new Array();
let browserLoadTime = new Array();

let startTime;
let endTime;

for(let i = 0; i < 5; i++) {
   let arr = new Array()
   output.push(arr);
   console.log(output.length);
   console.log(output)
}

async function runBrowser() {

   console.log(info.webSites.length)
   console.log(info.webSites)

   for(let x = 0; x < info.webSites.length; x++) {

      console.log(x);

      startTime = new Date();
      let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
      endTime = new Date();
      browserLoadTime.push(endTime - startTime);

      // startTime = new Date();
      // await driver.get(info.webUrl[x]);
      // // await driver.get()
      // endTime = new Date();
      // output[x].push(endTime - startTime);
      
      await driver.quit();
   }
}


(async function test() {

   for(let i = 0; i < numberOfInstance; i++) {
       await runBrowser();
   }

   console.log("browser loading time:: " + browserLoadTime)
   let evg = 0;

   for(let j = 0; j < browserLoadTime.length; j++) {
      console.log(browserLoadTime[j])
      evg = evg + browserLoadTime[j];
   }

   evg = evg / browserLoadTime.length;
   console.log("evg brow:: " + evg)



   // console.log("output")
   // console.log(output)

   // for(let x = 0; x < info.webSites.length; x++) {
   //    console.log("page " + info.webSites[x]);
   //    console.log("URL:: " + info.webUrl[x])
   //    console.log(output[x])

   //    let average = 0;
   //    for(let k = 0; k < output[x].length; k++) {
   //       average = average + output[x][k]
   //       console.log(output[x][k])
   //    }
         
   //    average = average / output[x].length;
   //    console.log("average response time:: " + average)
   // }

})();