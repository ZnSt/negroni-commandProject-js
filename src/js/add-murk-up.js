const divRef = document.querySelector('.main__flex');
export default function addMurkup(arr = []) {
  divRef.insertAdjacentHTML('beforeend', arr);
}
