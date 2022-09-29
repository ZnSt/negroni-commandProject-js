import axios from 'axios';

const btnEl=document.querySelector('.js-add')
const rembtnEl=document.querySelector('.js-rem')


btnEl.addEventListener('click', ()=>{addToLocalStCoctails('апап')});
rembtnEl.addEventListener('click', ()=>{remFromLocalStCoctails(3)});

function addToLocalStCoctails(name){
const localStorageData=localStorage.getItem('FAV_COCTAILS')
if(!localStorageData) {
  const favCoctArray=[{'strDrink':'name','idDrink':2}]
  localStorage.setItem('FAV_COCTAILS',JSON.stringify(favCoctArray));}
else{const localStorageDataRes=JSON.parse(localStorageData)
  const newLocal = localStorageDataRes.concat({'strDrink':'name2','idDrink':3});
  localStorage.setItem('FAV_COCTAILS',JSON.stringify(newLocal));
  console.log(newLocal)}
}
function remFromLocalStCoctails(coctailID){
  const localStorageData=localStorage.getItem('FAV_COCTAILS')
  if(!localStorageData) {
    return}
  else{const localStorageDataRes=JSON.parse(localStorageData)
    const favCoctArray=[];
    for (const coctail of localStorageDataRes) {
      if (coctail.idDrink===coctailID){continue}
      favCoctArray.push(coctail)
    }
    localStorage.removeItem('FAV_COCTAILS');
    localStorage.setItem('FAV_COCTAILS',JSON.stringify(favCoctArray))
  }


// const API_KEY = '30131532-b39fadf9a6636e24080a2757a';
// const BASE_URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=';
// const options = '&image_type=photo&orientation=horizontal&safesearch=true&';
// const perPage = 40;
// import { page } from '../index';
// function crateImageMarkUp({ strDrinkThumb, strDrink,idDrink}) {
//   console.log(strDrinkThumb)
//   console.log(strDrink)

//   console.log( `<div class="main__container">
//         <img class="main__img" src="${strDrinkThumb}" alt="negroni" />
//         <div class="main__text-container">
//           <h3 class="main__title-second">${strDrink}</h3>
//           <div class="main__button-center">
//             <button class="button-orang button" data-id="${idDrink}">Learn more</button>
//             <button class="button-transparent button">
//               Add to<span
//                 ><img
//                   src="../images/heart-min.png"
//                   alt="heart"
//                   width="20px"
//                   height="18px"
//                   class="main__button-img"
//               /></span>
//               <span
//                 ><img
//                   src="../images/full-heart.png"
//                   alt="heart"
//                   width="20px"
//                   height="18px"
//                   class="main__button-imgfull"
//               /></span>
//             </button>
//           </div>
//         </div>
//       </div>
//       `);
// }
// export async function getCoctail(input) {
//   try {
//     const response = await axios.get(
//       'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
//     );
//     console.log(response.data.drinks[0])
//     // crateImageMarkUp(response.data.drinks[0]) 
//   } catch (error) {
//     throw new Error(error);
//   }
// }