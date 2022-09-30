import axios from 'axios';
import Notiflix from 'notiflix';

const refs = {
  openModalBtn: document.querySelector("[data-header-modal-open]"),
  closeModalBtn: document.querySelector("[data-header-modal-close]"),
  modal: document.querySelector("[data-header-modal]"),
  body: document.querySelector('body'),
  favorite: document.querySelector('.favorite'),
  favoriteDiv: document.querySelector('.favorite-div'),
  favoriteModal: document.querySelector('.favorite-modal'),
  favoriteDivModal: document.querySelector('.favorite-div-modal'),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.favorite.addEventListener('click', onFavoriteClick);
refs.favoriteModal.addEventListener('click', onFavoriteModalClick);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.body.classList.toggle("no-scroll");
};

function onFavoriteClick(event) {
  event.preventDefault();

  refs.favoriteDiv.classList.toggle('none');
}

function onFavoriteModalClick(event) {
  event.preventDefault();

  refs.favoriteDivModal.classList.toggle('none');
}

//Поиск 
searchFormEl = document.querySelector('.header__search-form');
searchFormModalEl = document.querySelector('.header__modal-form');
divForMarkupEl = document.querySelector('.div-for-markup');

searchFormEl.addEventListener('submit', submitForm);
searchFormModalEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const { coctailName } = event.currentTarget.elements;
  const coctaillNameVal = coctailName.value.trim();
  //console.log(coctaillNameVal);

  if (!coctaillNameVal) {
    return;
  }

 amountData(coctaillNameVal);
}

//Первая функция к бэкенду
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?`;  

async function getCoctail(coctaillNameVal) {
  try {
    const responce = await axios.get(`${BASE_URL}s=${coctaillNameVal}`);
    console.log(responce.data);
    return responce.data;
  }
  catch(error) {
    throw new Error(error);
  }
};

//Функция, которая Promise преобразует в данные
async function amountData(coctaillNameVal) {
  try {
    const data = await getCoctail(coctaillNameVal);
    //console.log(data); //это массив найденных напитков

    if (data.drinks === null) {
      Notiflix.Notify.failure('На жаль такий коктель відсутній.');
    } 
    createMarkup(data.drinks);
  }
  catch (error) {
    console.log(error.message);
  }
};

//Функция создающая разметку
function createMarkup(drinksArr) {
  const markup = drinksArr.map(({ strDrinkThumb, strDrink, idDrink }) => `
  <div  class="main__container">
        <img class="main__img" src="${strDrinkThumb}" alt="negroni" />
        <div class="main__text-container">
          <h3 class="main__title-second">${strDrink}</h3>
          <div class="main__button-center">
            <button class="button-orange button">Learn more</button>
            <button data-id="${idDrink}" class="button-transparent button">
              Add to
<span><svg
class="main__button-img"
  width="21"
  height="19"
  viewBox="0 0 21 19"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"
    fill="#FD5103"
  />
  <path
    d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z"
    fill="#FCFCFC"
  />
</svg></span>
<span><svg class="main__button-imgfull" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"/>
</svg></span>
            </button>
          </div>
        </div>
      </div>`)
    .join('');
  
  divForMarkupEl.insertAdjacentHTML('beforeend', markup);
};