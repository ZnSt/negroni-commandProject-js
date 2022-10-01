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

function onClickList(event) {
    
    const result = event.target.dataset.value;
    selectText.textContent = result;
    return onClickBtn(event);
}