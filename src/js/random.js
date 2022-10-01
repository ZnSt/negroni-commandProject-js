import crateImageMarkUp from './murk-up';
import fetchRandomCocktail from './fetch';
import addMurkup from './add-murk-up';

// const divRef = document.querySelector('.main__flex');
const divRef = document.querySelector('.main__flex');
const spinnerRef = document.querySelector('.spinner-alert');
let responseDrink = '';
let allPromises = [];

const windowScreen = window.screen.width;
spinnerRef.classList.remove('visually-hidden-spinner');

if (windowScreen < 768) {
  getRandomData(3);
}
if (windowScreen >= 768 && windowScreen < 1280) {
  getRandomData(6);
}
if (windowScreen >= 1280) {
  getRandomData(12);
}

//запись данных в пустой массив
function getRandomCoctails(size) {
  const promises = [];
  for (let i = 0; i < size; i++) {
    promises.push(fetchRandomCocktail());
  }
  return promises;
}

// создание и добавление разметки
function returnAllCard(primises) {
  return Promise.all(primises)
    .then(data => data)
    .catch(error => console.log(error));
}
// aунция для фильтрации
function filterData(data = []) {
  return data.filter(
    ({ idDrink }, index, array) =>
      array.findIndex(obj => obj.idDrink === idDrink) === index
  );
}

let screenWidth = 0;

window.addEventListener(`resize`, checkSize);

function checkSize(e) {
  screenWidth = e.currentTarget.innerWidth;

  if (screenWidth < 768) {
    clearContainer();

    start(3);
  }
  if (screenWidth >= 768 && screenWidth < 1280) {
    clearContainer();

    start(6);
  }
  if (screenWidth >= 1280) {
    clearContainer();

    start(12);
  }
}

function clearContainer() {
  divRef.innerHTML = '';
}

// фильтрация промисей
async function getRandomData(size) {
  const promises = await getRandomCoctails(size);
  const data = await returnAllCard(promises);
  const fData = filterData(data);

  allPromises = [...fData];
  start(size);
  //   fData.forEach(item => allPromises.push(item));
  //   if (fData.length < size) {
  //     const resultSize = size - fData.length;
  //     start(resultSize, allPromises);
  //   }
  //   return allPromises.slice(0, size);
  // }
}

async function start(number) {
  const renderArray = [...allPromises];
  renderArray.splice(number, allPromises.length);
  //   console.log('allPromises :>> ', allPromises);
  const create = await crateImageMarkUp(renderArray);
  spinnerRef.classList.add('visually-hidden-spinner');
  addMurkup(create);
}
