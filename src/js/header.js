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

