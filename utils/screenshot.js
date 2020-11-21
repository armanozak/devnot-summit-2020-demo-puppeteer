const fs = require('fs');

const dir = 'screenshots';

async function takeScreenshot({ path, ...options }) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Screenshots do not work properly
  const initial = await page.evaluate(() => {
    const target = document.body;
    return { width: target.scrollWidth, height: target.scrollHeight };
  });

  const viewport = await page.evaluate(() => {
    const toolbar = document.querySelector('toolbar-component');
    const target = document.querySelector('content-box');
    return { width: target.scrollWidth, height: target.scrollHeight + toolbar.scrollHeight };
  });

  await page.setViewport(viewport);
  await page.screenshot({ path: `${dir}/${path}`, ...options }).then(() => page.setViewport(initial));
}

module.exports = {
  takeScreenshot,
};
