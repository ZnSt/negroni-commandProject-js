import axios from 'axios';
import {
  getElement,
  createIngredientMarkup,
  add,
  clearMarkupModal,
  onEscapeBtnPush,
} from './modalIng';
//
const divs = document.querySelector('.modal2'); // Nikita
const favorIngredsList = document.querySelector('.favor-ingreds__list');
console.log(favorIngredsList);
const STORAGE_KEY = 'localIngredient';

const favIngredsFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(favIngredsFromLS);

function makeGalleryItem({
  strIngredient,
  strType,
  strABV,
  strAlcohol,
  strDescription,
} = {}) {
  return `<li class="ingreds__item">
          <h3 class="ingreds__item__title">${strIngredient}</h3>
          <p class="ingreds__item__descript">${strType}</p>
          <div class="btn-container">
            <button type="button" class="button-rusty button" data-name="${strIngredient}">
              Learn more
            </button>
            <button type="button" class="button-transparent button">
              Remove<svg class="button-icon" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"/>
<path d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z" fill="#FCFCFC"/>
</svg>

            </button>
          </div>
        </li>`;
}

const favIngredsFromLSArr = favIngredsFromLS.map(el => {
  return makeGalleryItem(el);
});

favorIngredsList.innerHTML = favIngredsFromLSArr.join('');

// function addMarcup(marcupString) {
//   refs.modCoctailWindow.insertAdjacentHTML('beforeend', marcupString);
//   const modCocteilParentOfIngredients = document.querySelector(
//     '.mod__coctail--items'
//   );
//   modCocteilParentOfIngredients.addEventListener('click', openSecondModal);
// }

function openModalIngredient(event) {
  const name = event.target.dataset.name;
  console.log(name);

  getElement(name).then(data => {
    clearMarkupModal(divs);
    dataIngredient = data.ingredients;
    const markup = createIngredientMarkup(dataIngredient);
    add(markup);

    window.addEventListener('keydown', onEscapeBtnPush);
  });
  //   if (event.target.nodeName !== 'BUTTON') {
  //     return;
  //   }
  divs.classList.remove('is-hidden');
  //   console.dir(event.target);
}

favorIngredsList.addEventListener('click', openModalIngredient);
