import axios from 'axios';
const divs = document.querySelector('.modal2');
// console.log(divs);
export async function getElement(name) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
    );
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}

function andreiO(element){
    if(!element){
       return element = "-"
    }
    return element
}
// console.log(divs);
export function createIngredientMarkup(response = []) {
  //   console.log(response);
  return response
    .map(({ strIngredient, strType, strABV, strAlcohol, strDescription }) => {
        return `<div class="modalw2">
            <div class="modalw2__p modalw2__border">
                <h2 class="modalw2__title">${andreiO(strIngredient)}</h2>
            <button class="modalw2__btn"><svg width="32px" height="32px">
                <use
                  href=".//images/svg/symbol-defs.svg#icon-close"
                  class="modalw2__link"
                ></use>
              </svg></button>
            <h3 class="modalw2__title-second">${andreiO(strType)}</h3></div>
            <div class="modalw2__p">
                <p class="modalw2__text"><span class="modalw2__span">${andreiO(strIngredient)}</span> ${andreiO(strDescription)}</p>
                <ul class="modalw2__list">
                <li class="modalw2__item">&#10038 Alcohol: ${andreiO(strAlcohol)}</li>
                <li class="modalw2__item">&#10038 Alcohol by volume: ${andreiO(strABV)}</li>
            </ul>
            <button type="button" class="modalw2__btn__add">Add to favorite</button>
            <button type="button" class="modalw2__btn__remove">Add to favorite</button>
        </div>
        </div>`;
    })
    .join('');
}
export function add(markupString) {
  divs.insertAdjacentHTML('beforeend', markupString);
}


getElement('vodka').then(data => {
    // console.log(data);
    const markup = createIngredientMarkup(data.ingredients);
    add(markup);
  });