import onClickBtn from './hero';
import { fetchGetData } from '../servises/cocktails-api';

const customSelect = document.querySelector('.select');
const dropDown = document.querySelector('.select__dropdown');
const listMobi = document.querySelector('.hero-list__mobi');
const selectText = document.querySelector('.input-text');

customSelect.addEventListener('click', onClickCustomSelect);
// dropDown.addEventListener('click', onClickListMobi);

function onClickCustomSelect() {

    dropDown.classList.toggle('is-hidden');
    listMobi.addEventListener('click', onClickList);
}
customSelect.classList.remove('change-color');
function onClickList(event) {
    customSelect.classList.add('change-color');
    const result = event.target.dataset.value;
    selectText.textContent = result;
    dropDown.classList.toggle('is-hidden');
    return onClickBtn(event);
}