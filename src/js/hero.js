import * as API from '../servises/cocktails-api';
import crateImageMarkUp from './murk-up';
import errorPicture from './error-markup';

const ulContainer = document.querySelector('.hero-list');
const renderContainer = document.querySelector('.main__flex');

ulContainer.addEventListener('click', onClickBtn);

async function onClickBtn(event) {
  const value = event.target.dataset.value.toLowerCase();
  if (event.target.nodeName !== 'LI') {
    return;
  }

  try {
    const responseData = await API.fetchGetData(value);
    console.log(responseData);
    const markup = crateImageMarkUp(responseData.drinks);

    renderContainer.innerHTML = '';
    renderContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    renderContainer.innerHTML = '';
    const errorPic = errorPicture();
    renderContainer.insertAdjacentHTML('beforeend', errorPic);
  }
}
