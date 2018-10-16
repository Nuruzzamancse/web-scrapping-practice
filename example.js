const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.screenshotbin.com/account?welcome=1');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();