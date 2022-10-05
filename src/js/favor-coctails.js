const mainDivEl = document.querySelector('.main')
console.log(mainDivEl)
if (divRef.dataset.page === 'favorite-coctails'){}
function ifFavCoctailEmpty (){
const localStorageData = localStorage.getItem('FAV_COCTAILS');
const localStorageDataRes = JSON.parse(localStorageData);
if (!localStorageData || localStorageDataRes.length === 0){}
}