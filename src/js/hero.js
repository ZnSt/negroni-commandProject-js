import * as API from '../servises/cocktails-api';
import crateImageMarkUp from './murk-up';
import * as random from './random';

const ulContainer = document.querySelector('.hero-list');
const renderContainer = document.querySelector('.main__flex');
const errorContainer = document.querySelector('.sorry');

ulContainer.addEventListener('click', onClickBtn);

export default async function onClickBtn(event) {
  const value = event.target.dataset.value.toLowerCase();
  if (event.target.nodeName !== 'LI') {
    return;
  }
  try {
    const responseData = await API.fetchGetData(value);
    // console.log(responseData);
    random.wichDataToUse(random.numberOfCards, responseData.drinks);

    const markup = crateImageMarkUp(responseData.drinks);
    // console.log(responseData.drinks)

    // renderContainer.innerHTML = '';
    // renderContainer.insertAdjacentHTML('beforeend', markup);
    errorContainer.classList.add('error-hidden');
  } catch (error) {
    renderContainer.innerHTML = '';
    errorContainer.classList.remove('error-hidden');
  }
}
