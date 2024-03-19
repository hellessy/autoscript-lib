const puppeteer = require('puppeteer');

async function fetchPage(url, options = {}) {
  const browser = await puppeteer.launch(options.launchOptions);
  const page = await browser.newPage();

  if (options.viewport) {
    await page.setViewport(options.viewport);
  }

  await page.goto(url, options.gotoOptions);

  // 这里可以根据需要执行更多的操作，例如页面内容分析等
  const content = await page.content();

  await browser.close();

  return content;
}

module.exports = {
  fetchPage
};