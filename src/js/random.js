import crateImageMarkUp from './murk-up';
import fetchRandomCocktail from './fetch';
import addMurkup from './add-murk-up';
import { whyTheme } from './switcher-theme';

const divRef = document.querySelector('.main__flex');
const spinnerRef = document.querySelector('.spinner-alert');
let responseDrink = '';
let allPromises = [];

whyTheme();

// Andrei
divRef.addEventListener('click', onAddCardBtnClick);
divRef.addEventListener('click', onRemCardBtnClick);
divRef.addEventListener('click', onLearnCardBtnClick);

function onAddCardBtnClick(e) {
  if (e.target.dataset.actions !== 'add') {
    return;
  }
  const card = allPromises.filter(
    coctail => coctail.idDrink === e.target.dataset.id
  )[0];
  // addToLocalStCoctails(card);
  e.target.innerHTML = `  Remove 
  <span><svg class="main__button-img" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"></path>
    <path d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z" fill="#FCFCFC"></path>
  </svg></span>
  <span><svg class="main__button-imgfull" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"></path>
  </svg></span>`;
  e.target.dataset.actions = 'remove';
}

function onRemCardBtnClick(e) {
  if (e.target.dataset.actions !== 'remove') {
    return;
  }
  e.target.innerHTML = `  Add to 
  <span><svg class="main__button-img" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"></path>
    <path d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z" fill="#FCFCFC"></path>
  </svg></span>
  <span><svg class="main__button-imgfull" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"></path>
  </svg></span>`;

  e.target.dataset.actions = 'add';

  // remFromLocalStCoctails(e.target.dataset.id)
}

function onLearnCardBtnClick(e) {
  if (!e.target.hasAttribute('data-learnmoreid')) {
    return;
  }
}

function remFromLocalStCoctails(coctailID) {
  const localStorageData = localStorage.getItem('FAV_COCTAILS');
  if (!localStorageData) {
    return;
  } else {
    const localStorageDataRes = JSON.parse(localStorageData);
    const favCoctArray = [];

    for (const coctail of localStorageDataRes) {
      if (coctail.idDrink === coctailID) {
        continue;
      }
      favCoctArray.push(coctail);
    }
    localStorage.removeItem('FAV_COCTAILS');
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(favCoctArray));
    location.reload();
  }
}
// Andrei

const windowScreen = window.screen.width;
spinnerRef.classList.remove('visually-hidden-spinner');

if (windowScreen < 768) {
  getRandomData(3);
}
if (windowScreen >= 768 && windowScreen < 1280) {
  getRandomData(6);
}
if (windowScreen >= 1280) {
  getRandomData(9);
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

    start(9);
  }
}

function clearContainer() {
  divRef.innerHTML = '';
}

// фильтрация промисей
async function getRandomData(size) {
  // Andrei
  if (divRef.dataset.page === 'favorite-coctails') {
    allPromises = JSON.parse(localStorage.getItem('FAV_COCTAILS'));
    start(size);
    return;
  }
  // Andrei
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

// Andrei
export function addToLocalStCoctails({ strDrink, strDrinkThumb, idDrink }) {
  const localStorageData = localStorage.getItem('FAV_COCTAILS');
  const localStorageDataRes = JSON.parse(localStorageData);

  if (!localStorageData || localStorageDataRes.length === 0) {
    const favCoctArray = [
      { strDrink: strDrink, strDrinkThumb: strDrinkThumb, idDrink: idDrink },
    ];
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(favCoctArray));
  } else {
    const newLocal = localStorageDataRes.concat({
      strDrink: strDrink,
      strDrinkThumb: strDrinkThumb,
      idDrink: idDrink,
    });
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(newLocal));
  }
}
// Andrei
