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

const doNothing = () => undefined;

const writeFile = promisify(fs.writeFile);

const _require = (path, elseData) => new Promise((resolve, reject) => {
  try {
    resolve(require(path));
  } catch (e) {
    resolve(elseData);
  }
});

const wait = t => new Promise(r => setTimeout(r, t));

const log = (...args) => {
  console.clear();
  console.log(...args);
};

const writeJSONTo = (path, data) =>
  writeFile(resolve(__dirname, path), JSON.stringify(data, null, 4));

console.clear();

(async () => {
  /** @ SETTUP @ */

  const browser = await puppeteer.launch({
    /** Если надо дебажить, подрубить */
    // headless: false,
    ignoreDefaultArgs: ['--disable-extensions'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://yandex.ru/maps/geo/respublika_krym/1444278541/?ll=34.526191%2C45.226951&z=7.26');

  const places = await _require('./input.json', false);
  if (!places) log('Заполните input.json для работы скрипта');

  const result = [];

  const errored = [];

  /** @ CLEANING @ */

  writeJSONTo('data.json', []);
  writeJSONTo('errored.json', []);

  /** @ MAIN @ */

  let idx = 0;
  for (const place of places) {
    try {
      await page.click('.small-search-form-view__icon._type_close').catch(doNothing);

       // Search
      await page.click('.search-form-view__input');
      await page.type('.search-form-view__input .input__control', place);
      await page.click('.small-search-form-view__button');

      await wait(2000);

      // Getting coordinates
      await page.click('.search-business-snippet-view__title').catch(doNothing);
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

      const dataJson = await _require('./data.json', []);
      await writeJSONTo('data.json', dataJson.concat(result));

      log(
        `${place} обработан ✅\n` +
        `${++idx} из ${places.length}`
      );
    } catch (e) {
      errored.push(place);

      const erroredJson = await _require('./errored.json', []);
      await writeJSONTo('errored.json', erroredJson.concat(errored));

      log(
        `${place} не обработан ⚠️ \n` +
        `${++idx} из ${places.length}`
      );
    }
  }

  /** @ ENDING @ */

  log(
    'Работа скрипта завершена\n',
    `${result.length} обработано ✅\n`,
    `${errored.length} не обработано ⚠️\n`,
  );

  await wait(5000);

  await browser.close();
})();
