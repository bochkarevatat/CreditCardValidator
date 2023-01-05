import puppeteer from 'puppeteer';

describe('In form', () => {
  let browser = null;
  let page = null;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test('Form should render on page', async () => {
    await page.goto('http://localhost:5500/src');
    await page.setDefaultNavigationTimeout(60000);
    await page.waitForSelector('body');
    // await page.waitFor('body');
  });
  afterEach(async () => {
    await browser.close();
  });
});
