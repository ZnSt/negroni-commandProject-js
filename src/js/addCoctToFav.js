import axios from 'axios';
import clearContainer from './random';
import addMurkup from './add-murk-up';
import crateImageMarkUp from './murk-up';
import checkSize from './random';

const btnEl = document.querySelector('.js-add');
const rembtnEl = document.querySelector('.js-rem');

btnEl.addEventListener('click', () => {
  addToLocalStCoctails('апап');
});
rembtnEl.addEventListener('click', () => {
  remFromLocalStCoctails(3);
});

function addToLocalStCoctails(name) {
  const localStorageData = localStorage.getItem('FAV_COCTAILS');

  if (!localStorageData) {
    const favCoctArray = [{ strDrink: 'name', idDrink: 2 }];
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(favCoctArray));
  } else {
    const localStorageDataRes = JSON.parse(localStorageData);
    const newLocal = localStorageDataRes.concat({
      strDrink: 'name2',
      idDrink: 3,
    });
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(newLocal));
    console.log(newLocal);
  }
}

function remFromLocalStCoctails(coctailID) {
  const localStorageData = localStorage.getItem('FAV_COCTAILS');

  if (!localStorageData) {
    return;
  } else {
    const localStorageDataRes = JSON.parse(localStorageData);
    const favCoctArray = [];
    for (const coctail of localStorageDataRes) {
      if (coctail.idDrink === coctailID) {
        continue;
      }
      favCoctArray.push(coctail);
    }
    localStorage.removeItem('FAV_COCTAILS');
    localStorage.setItem('FAV_COCTAILS', JSON.stringify(favCoctArray));
  }
}

//   // --------------------------------------
//   function crateImageMarkUp(response) {
//     return response
//       .map(({ strDrinkThumb, strDrink, idDrink }) => {
//         return `<div  class="main__container">
//           <img class="main__img" src="${strDrinkThumb}" alt="negroni" />
//           <div class="main__text-container">
//             <h3 class="main__title-second">${strDrink}</h3>
//             <div class="main__button-center">
//               <button class="button-orange button">Learn more</button>
//               <button data-id="${idDrink}" class="button-transparent button">
//                 Add to
//   <span><svg
//   class="main__button-img"
//     width="21"
//     height="19"
//     viewBox="0 0 21 19"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   ><path
//       d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"
//       fill="#FD5103"
//     />
//     <path
//       d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z"
//       fill="#FCFCFC"
//     />
//   </svg></span>
//   <span><svg class="main__button-imgfull" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"/>
//   </svg></span>
//               </button>
//             </div>
//           </div>
//         </div>
//         `;
//       })
//       .join('');
//   }

//   const divRef = document.querySelector('.main__flex');
// export default function addMurkup(arr = []) {
//   divRef.insertAdjacentHTML('beforeend', arr);
// }
function onLoad(){
function checkSize(e) 
  //   screenWidth = e.currentTarget.innerWidth;
  
  //   console.log(screenWidth);
  //   if (screenWidth < 768) {
  //     clearContainer();
  //     start(3);
  //   }
  //   if (screenWidth >= 768 && screenWidth < 1280) {
  //     clearContainer();
  //     start(6);
  //   }
  //   if (screenWidth >= 1280) {
  //     clearContainer();
  //     start(12);
  //   }
  // }
  
//  clearContainer()
//  export function clearContainer() {
//   divRef.innerHTML = '';
// const localStorageData = localStorage.getItem('FAV_COCTAILS');

// crateImageMarkUp(localStorageData)

// }
// onLoad()
