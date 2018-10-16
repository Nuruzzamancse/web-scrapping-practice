const puppeteer = require('puppeteer');

async function run() {
let browser = await puppeteer.launch({ headless: false });
let page = await browser.newPage(); 
await page.setViewport({ width: 1366, height: 768 });
await page.goto('https://www.scrapehero.com/');
await page.screenshot({ path: './image.jpg', type: 'jpeg' });
}

run();