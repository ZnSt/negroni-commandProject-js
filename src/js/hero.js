const ulContainer = document.querySelector('.hero-list__mobi');
console.log(ulContainer);

ulContainer.addEventListener('click', onClickBtn);

function onClickBtn(event) {
  console.log(event.target);
  if (event.target.nodeName !== 'LI') {
    return;
  }
}
