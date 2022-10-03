import axios from 'axios';
import Notiflix from 'notiflix';
import crateImageMarkUp from './murk-up';
import { divRef } from './add-murk-up';

const refs = {
  openModalBtn: document.querySelector('[data-header-modal-open]'),
  closeModalBtn: document.querySelector('[data-header-modal-close]'),
  modal: document.querySelector('[data-header-modal]'),
  body: document.querySelector('body'),
  favorite: document.querySelector('.favorite'),
  favoriteDiv: document.querySelector('.favorite-div'),
  favoriteModal: document.querySelector('.favorite-modal'),
  favoriteDivModal: document.querySelector('.favorite-div-modal'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.favorite.addEventListener('click', onFavoriteClick);
refs.favoriteModal.addEventListener('click', onFavoriteModalClick);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function onFavoriteClick(event) {
  event.preventDefault();

  refs.favoriteDiv.classList.toggle('none');
}

function onFavoriteModalClick(event) {
  event.preventDefault();

  refs.favoriteDivModal.classList.toggle('none');
}

//Поиск
const searchFormEl = document.querySelector('.header__search-form');
const searchFormModalEl = document.querySelector('.header__modal-form');
const errorDivEl = document.querySelector('.sorry');
const titleErrorEl = document.querySelector('.main__title');

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
  } catch (error) {
    throw new Error(error);
  }
}

//Функция, которая Promise преобразует в данные
async function amountData(coctaillNameVal) {
  try {
    const data = await getCoctail(coctaillNameVal);
    //divRef.innerHTML = '';
    errorDivEl.classList.add('error-hidden');
    inputAddMurkup(crateImageMarkUp(data.drinks));
  } catch (error) {
    // console.log(error.massage);
    divRef.innerHTML = '';
    errorDivEl.classList.remove('error-hidden');
    titleErrorEl.classList.add('is-hidden');
  }
}

//Функция добавления разметки по поиску в инпуте
function inputAddMurkup(arr = []) {
  divRef.innerHTML = arr;
}
