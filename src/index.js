import { getElement, add, createIngredientMarkup } from './js/ingredient_modal';

let dataIngredient = [];

getElement('vodka').then(data => {
  dataIngredient = data.ingredients;
  //   console.log(dataIngredient);
  const markup = createIngredientMarkup(dataIngredient);
  add(markup);
});

const onClickBtn = document.querySelector('.modal2');
onClickBtn.addEventListener('click', onClickBtnAdd);

const getIngredientOnLocal = localStorage.getItem('localIngredient');

function onClickBtnAdd(e) {
  console.log(dataIngredient);
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (!getIngredientOnLocal) {
    save('localIngredient', dataIngredient);
  }
}

// Код для localStorage
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// function addToLocalStCoctails(name){
// const localStorageData=localStorage.getItem('FAV_COCTAILS')
// if(!localStorageData) {
//   const favCoctArray=[{'strDrink':'name','idDrink':2}]
//   localStorage.setItem('FAV_COCTAILS',JSON.stringify(favCoctArray));}
// else{const localStorageDataRes=JSON.parse(localStorageData)
//   const newLocal = localStorageDataRes.concat({'strDrink':'name2','idDrink':3});
//   localStorage.setItem('FAV_COCTAILS',JSON.stringify(newLocal));
//   console.log(newLocal)}
// }
// function remFromLocalStCoctails(coctailID){
//   const localStorageData=localStorage.getItem('FAV_COCTAILS')
//   if(!localStorageData) {
//     return}
//   else{const localStorageDataRes=JSON.parse(localStorageData)
//     const favCoctArray=[];
//     for (const coctail of localStorageDataRes) {
//       if (coctail.idDrink===coctailID){continue}
//       favCoctArray.push(coctail)
//     }
//     localStorage.removeItem('FAV_COCTAILS');
//     localStorage.setItem('FAV_COCTAILS',JSON.stringify(favCoctArray))
//   }
