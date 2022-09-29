import axios from 'axios';

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

// function onFavoriteModalClick(event) {
//   event.preventDefault();

//   refs.favoriteDivModal.classList.toggle('none');
// }

//Поиск 
searchFormEl = document.querySelector('.header__search-form');
searchFormModalEl = document.querySelector('.header__modal-form');

searchFormEl.addEventListener('submit', submitForm);
searchFormModalEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const { coctailName } = event.currentTarget.elements;
  const coctaillNameVal = coctailName.value.trim();
  console.log(coctaillNameVal);

  if (!coctaillNameVal) {
    return;
  }

  getCoctail(coctaillNameVal);
}

const BASE_URL = `www.thecocktaildb.com/api/json/v1/1/search.php?`;  

async function getCoctail(coctaillName) {
  try {
    const responce = await axios.get(`${BASE_URL}s=${coctaillName}`);
    console.log(responce.data);
    return responce.data;
    
  }
  catch(error) {
    throw new Error(error);
  }
};

