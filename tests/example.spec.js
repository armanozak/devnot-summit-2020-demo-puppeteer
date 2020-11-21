const { takeScreenshot } = require('../utils/screenshot');

describe('Pptr.dev', () => {
  beforeAll(async () => {
    await page.goto('https://pptr.dev/');
    await page.waitForSelector('h1');
  });

  it('should display "Puppeteer" text on page', async () => {
    const h1 = await page.$('h1');
    await expect(h1).toMatch('Puppeteer');
    await takeScreenshot({ path: 'pptr.png' });
  });
});
