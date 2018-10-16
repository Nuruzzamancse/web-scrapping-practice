const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices[ 'iPhone 8' ];

async function run() {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('https://www.facebook.com/');
    await page.screenshot({ path: './image.jpg', type: 'jpeg' });
    await page.close();
    await browser.close();
}

run();