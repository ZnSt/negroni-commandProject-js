import axios from 'axios';
const refs = {
  modCoctailWindow: document.querySelector(".mod__coctail"),
  modCoctailBtnClose: document.querySelector(".mod__coctail--btn__close"),
  modCoctailBtnAdd: document.querySelector('.mod__coctail--button--add'),
  modCoctailBtnRemove: document.querySelector('.mod__coctail--button--remove'),
};
// const renderingPage = document.querySelector('')

// refs.modCoctailBtnClose.addEventListener('click', closeModalBtnCocktail)
// refs.modCoctailBtnClose.addEventListener('click', clearMarkup)
// refs.modCoctailBtnAdd.addEventListener('click', addCocktToFavor)
// refs.modCoctailBtnRemove.addEventListener('click', removeCocktFromFavor)

async function openModalCoctWind(getCocktail) {
  try {
    const idCocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getCocktail}`)
    return idCocktail.data
  } catch (error) {
    console.log('error', error)
  }
}

openModalCoctWind(11003).then(data => {
  const dataCocktails = data.drinks
  const marcup = createMarkupCoct(dataCocktails)
  addMarcup(marcup)
})

function addMarcup(marcupString) {
  refs.modCoctailWindow.insertAdjacentHTML('beforeend', marcupString);
}

function createMarkupCoct(value = []) {
  return value.map(({ idDrink, strDrinkThumb, strDrink, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, }) => {
    return `<p class="mod__coctail--name">${strDrink}</p>
  <button class="mod__coctail--btn__close"><svg width="18px" height="18px">
      <use href=".//images/svg/symbol-defs.svg#icon-close" class="mod__coctail--btn__link"></use>
    </svg></button>
  <div class="mod__coctail--blockinstractions--allingredients">
    <div class="mod__coctail--blockinstractions">
      <p class="mod__coctail--instractions">Instractions:</p>
      <p class="mod__coctail--recipe">${strInstructions}</p>
    </div>
    <div class="mod__coctail--block__photo">
    <img class="mod__coctail--photo" src="${strDrinkThumb}" alt="photo">
    </div>
    <div class="mod__coctail--allingredients">
      <p class="mod__coctail--ingredients">ingredients</p>
      <p class="mod__coctail--compound">Per cocktail</p>
      <ul class="mod__coctail--items">
        <li class="mod__coctail--item"><a class="mod__coctail--item__link" href="#">&#10038 ${strMeasure1} ${strIngredient1}</a></li>
        <li class="mod__coctail--item"><a class="mod__coctail--item__link" href="#">&#10038 ${strMeasure2} ${strIngredient2}</a></li>
        <li class="mod__coctail--item"><a class="mod__coctail--item__link" href="#">&#10038 ${strMeasure3} ${strIngredient3}</a></li>
        <li class="mod__coctail--item"><a class="mod__coctail--item__link" href="#">&#10038 ${strMeasure4} ${strIngredient4}</a></li>
        <li class="mod__coctail--item"><a class="mod__coctail--item__link" href="#">&#10038 ${strMeasure5} ${strIngredient5}</a></li>
      </ul>
    </div>
  </div>
  <div class="mod__coctail--blockbutton--add">
    <button class="mod__coctail--button--add" type="button">Add to favorite</button>
  </div>
  <div class="mod__coctail--blockbutton--remove is-hidden">
    <button class="mod__coctail--button--remove" type="button">Remove from favorite</button>
  </div>`
  }).join()

}

// function closeModalBtnCocktail() {
//   refs.modCoctailWindow.classList.add('is-hidden')
// }
// function clearMarkup() {
//   modCoctailWindow.innerHTML = '';
// }

function addCocktToFavor() {
  console.log('add')
}

function removeCocktFromFavor() {
  console.log('remove')
}

function changeBtnAddRemove(active, disabled) {
  console.log('change')
}


