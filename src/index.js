import { getElement, add, createIngredientMarkup } from './js/ingredient_modal';
const divs = document.querySelector('.modal2');

getElement('vodka').then(data => {
  const markup = createIngredientMarkup(data.ingredients);
  add(markup);
});

// __________________________________________________________________________
const onClickAdd = document.querySelector('.modal2__btn__add');
console.log(onClickAdd);

onClickAdd.addEventListener('click', onClickBtnAdd);

// Код для localStorage
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
