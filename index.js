/*

⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣠⡹⣒⣃⢃⠞⠀⠀⠀⠀⠀⠀⠀⠀⠤⢸⣿⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡀⠊⠄⠀⠀⠀⠡⠈⠤⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⢄⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⡠⠂⠁⠧⠋⠊⠀⠀⡀⠄⣐⣪⣥⣴⣶⣿⣿⡿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⡾⡢⢀⠀⠀⠀⠀⠀⠀⠆⠔
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠂⠀⠀⠀⣿⣿⣿⣿⣿⣿⠜⠀⠀⠀⠀⡀⢔⣠⣴⣾⠿⠟⠛⢉⡠⠔⣋⠀⠠⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡪⠠⡈⠄⠀⠀⠀⠀⠀⠀⠐
⠀⠀⠀⠀⠐⠂⡰⠄⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠠⢐⣬⣾⡿⠛⠉⠀⠀⠀⠔⠋⠐⣬⠶⠾⡛⡏⢹⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⡎⡪⡊⢀⠀⠀⠀⠀⠀⠀⠀
⢀⠀⠀⠀⠀⡁⠀⠂⠀⠀⠀⠀⠀⠀⠐⣿⣿⣿⣿⣿⣿⡦⣪⣾⡿⠛⣁⠀⠀⠀⠀⠀⠀⠐⡄⠌⣸⣲⣡⠷⡗⠓⢸⣿⣿⣿⣿⣿⣿⣿⣿⡏⢀⠒⢊⣿⣿⣿⣿⡯⠊⢀⠜⠀⠀⠀⠀⠀⠀⠀
⠈⣠⣤⣀⣬⣂⠀⠀⠀⠀⠀⠀⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠿⠓⠚⢉⣁⢈⠐⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠁⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⡁⠀⠠⢸⣿⣿⣿⡇⠀⠁⠀⠁⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠈⠀⠀⠁⣿⣿⣿⣿⣿⡟⣿⢀⣴⡼⠖⢖⠲⠄⡇⠀⠀⠀⠀⠈⠐⠀⡀⠀⠸⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⠉⠄⠀⢺⣿⣿⣿⣗⠀⠔⡠⣃⠀⠀⢀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠑⣿⣿⣿⣿⣿⡇⢿⣾⢻⡡⣯⠟⠊⠈⠇⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇⠂⡏⢰⣾⣿⣿⣿⣇⣡⡺⢛⣻⠔⡀⣄⣢⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⠘⣿⠖⠋⠀⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠢⡀⣿⣿⣿⣿⣿⣿⣿⣿⡇⢀⡇⢸⣿⣿⣿⣿⣿⣿⣿⣾⣿⣖⡐⠐⠀⠁⠀
⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠐⢸⣿⣿⣿⣿⣿⣇⢹⡄⠀⠀⠀⡀⠐⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡗⠅⠃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡀⢣⠀⠀⢠⠀⠀⠱⡈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⣿⣿⣿⣿⣿⣿⣿⣾⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏
⣿⣿⣿⣿⣿⣿⡟⡯⠇⠉⠀⠀⡀⠀⠀⠀⢿⡏⣿⣿⣿⣿⣿⡆⠀⠀⠐⠀⠀⠀⠀⠀⢀⡠⠄⠒⠒⠀⠒⠂⠀⠀⠀⢸⡇⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡜
⣿⣿⣿⣿⣿⡟⠀⠀⠈⠀⠀⠈⠀⠀⠀⠀⠸⡇⢻⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠌⠀⢀⠄⠀⠒⠀⠀⠀⠀⠀⠀⢸⠀⢹⣿⣿⣿⣸⣿⣿⠇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠊
⣿⣻⠿⠛⠁⠀⡕⠀⠀⠀⢠⡇⠂⠀⠀⠀⠀⣇⠘⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣏⠹⣿⠺⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠣
⠁⠀⠀⢠⠀⡀⠀⠀⠀⠀⣾⣧⢰⠀⠀⠀⠀⠸⠀⢹⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⢇⠊⢿⢱⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡀
⠀⠀⠀⢸⠈⠀⠀⠀⠀⢀⣿⣿⠘⠀⠀⠀⠀⠀⠀⠀⣿⣿⠸⣿⣿⡿⣿⡗⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣔⠟⠋⣿⣟⠁⠀⠀⢸⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡓⢅
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡆⣀⣀⡀⠀⠀⠀⠀⠘⣿⣄⣹⣿⣧⢻⡇⠁⠀⣄⠀⠀⠀⠀⠀⠀⣀⣀⣤⡾⢾⡴⠋⠀⠀⣿⠇⠀⠀⠀⠈⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢨⠢
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⡇⢠⠀⠉⠉⠉⠉⠉⠉⢻⡇⠀⢻⣿⠀⢃⠀⠀⠘⢷⣦⣤⡶⣦⡿⣛⠭⠷⠀⡫⣢⠖⡰⢢⠘⠀⠀⠀⠀⡄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣷⣿⣷
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⢻⡄⠀⠀⠀⠀⠈⢻⣿⣎⡇⣶⢹⢆⢇⢄⢑⣉⠆⠡⠁⠀⠀⡠⠶⡡⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⡇⠇⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠈⢇⠀⠀⠀⢠⢞⢂⡙⢿⠲⠳⠹⠬⠚⠈⠁⠀⠐⣀⠠⠀⠈⣀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠛⠄⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⢨⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⣡⠡⠖⠞⠘⢀⠤⡀⢀⣀⢄⠤⠦⠘⠂⠀⠉⠁⠀⠀⢀⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣇⠇⠀⠀⠐⠠⣀⠀⠀⠀⠀⠀⠀⠀⡡⣀⣜⠕⠥⠤⠤⣋⠎⠊⠠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣴⠀⠀⠀⠀⠀⠀⠉⠐⠒⠮⣌⠾⠾⠛⠒⠤⠀⢈⠀⠀⠀⠀⠁⠀⠀⢀⣀⣀⣤⣤⣶⣾⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

⚠️ КОД ГОВНО ⚠️ АВТОР ШИЗОИД ⚠️

*/

const puppeteer = require('puppeteer');
const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const wait = t => new Promise(r => setTimeout(r, t));
const log = (...args) => {
  console.clear();
  console.log(...args);
};

console.clear();

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    ignoreDefaultArgs: ['--disable-extensions'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();

  await page.goto('https://yandex.ru/maps/geo/respublika_krym/1444278541/?ll=34.526191%2C45.226951&z=7.26');

  // const places = require('./receive_img.json');
  const places = ['Пляж MRIYA RESORT & SPA', 'Hellowa', 'Алушта']
  const result = [];

  const errored = [];

  let idx = 0;
  for (const place of places) {
    try {
      await page.click('.small-search-form-view__icon._type_close').catch(() => undefined);

       // Search
      await page.click('.search-form-view__input');
      await page.type('.search-form-view__input .input__control', place);
      await page.click('.small-search-form-view__button');

      await wait(2000);

      // Getting coordinates
      await page.click('.search-business-snippet-view__title');
      await wait(500);
      await page.click('.business-contacts-view__address-link');
      await wait(500);

      const coordsElem = await page.$('.toponym-card-title-view__coords-badge')
      const coords = await coordsElem.evaluate(node => node.innerText);

      // Mappgin coords xx.xxxx, xx.xxxx
      result.push({
        place,
        coords: coords.replace(' ', '').split(',')
      });

      const dataJson = require('./data.json') || [];
      await writeFile(resolve(__dirname, 'data.json'), JSON.stringify(dataJson.concat(result), null, 4));

      log(
        `${place} обработан ✅\n` +
        `${++idx} из ${places.length}`
      );
    } catch (e) {
      errored.push(place);

      const erroredJson = require('./errored.json') || [];
      await writeFile(resolve(__dirname, 'errored.json'), JSON.stringify(erroredJson.concat(errored), null, 4));

      log(
        `${place} не обработан ⚠️ \n` +
        `${++idx} из ${places.length}`
      );
    }
  }

  log(
    result,
    `\n${result.length} обработано ✅\n`,
    `${errored.length} не обработано ⚠️ \n`
  );

  await writeFile(resolve(__dirname, 'errored.json'), JSON.stringify(errored, null, 4));

  await wait(5000);

  await browser.close();
})();
