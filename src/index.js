// import { getElement } from './js/ingredient_modal';
import axios from 'axios';

async function getElement() {
  const response = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
  );
  const data = await response.drinks;

  return data;
}

getElement();

crateImageMarkUp(getElement());

function crateImageMarkUp(response) {
  console.log(response);
  return response
    .map(({ strDrinkThumb, strDrink }) => {
      return `<div class="main__container">
        <img class="main__img" src="${strDrinkThumb}" alt="negroni" />
        <div class="main__text-container">
          <h3 class="main__title-second">${strDrink}</h3>
          <div class="main__button-center">
            <button class="button-orang button">Learn more</button>
            <button class="button-transparent button">
              Add to<span
                ><img
                  src="../images/heart-min.png"
                  alt="heart"
                  width="20px"
                  height="18px"
                  class="main__button-img"
              /></span>
              <span
                ><img
                  src="../images/full-heart.png"
                  alt="heart"
                  width="20px"
                  height="18px"
                  class="main__button-imgfull"
              /></span>
            </button>
          </div>
        </div>
      </div>`;
    })
    .join('');
}
