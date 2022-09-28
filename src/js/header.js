const refs = {
  openModalBtn: document.querySelector("[data-header-modal-open]"),
  closeModalBtn: document.querySelector("[data-header-modal-close]"),
  modal: document.querySelector("[data-header-modal]"),
  body: document.querySelector('body'),
  favorite: document.querySelector('.favorite'),
  favoriteDiv: document.querySelector('.favorite-div'),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.favorite.addEventListener('click', onFavorireClick);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.body.classList.toggle("no-scroll");
};

function onFavorireClick(event) {
  event.preventDefault();

  refs.favoriteDiv.classList.toggle('none');
}
