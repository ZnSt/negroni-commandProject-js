import crateImageMarkUp from './murk-up';
import fetchRandomCocktail from './fetch';
import addMurkup from './add-murk-up';

// const divRef = document.querySelector('.main__flex');

let responseDrink = '';

//запись данных в пустой массив
function getRandomCoctails(size, promise) {
  let primises = [];

  for (let i = 0; i < size; i++) {
    primises.push(fetchRandomCocktail());
  }
  return primises;
}

// создание и добавление разметки
function returnAllCard() {
  Promise.all(primises)
    .then(data => {
      const cardMurkUp = crateImageMarkUp(data);
      return cardMurkUp;
    })
    .then(cardMurkUp => addMurkup(cardMurkUp))
    .catch(error => console.log(error));
}
// const screenWidth = window.screen.width;

function start() {
  const promise = [];
  getRandomCoctails(9, promise);
}

function filter(elem, i, arr) {
  const filterCard = [];

  for (let i = 0; i < arr.length; i++) {
    if (elem[i] === i) {
      filterCard.push(this[i]);
    }
  }

  return filterCard;
}
