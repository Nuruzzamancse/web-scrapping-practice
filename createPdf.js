const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://developers.google.com/web/updates/2017/04/headless-chrome', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'Nabwab.pdf', format: 'A4'});

  await browser.close();
})();