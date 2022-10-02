// const themeSwitchDeskRef = document.querySelector('[data-switcher-desktop]');
// const themeSwitchMobRef = document.querySelector('[data-switcher-mobil]');

function addThemeToLocalSt(theme) {
    localStorage.setItem('DESKTOP_THEME', JSON.stringify(theme))}

function getThemefromLocalSt(){
    const localStorageDataRes = JSON.parse(localStorage.getItem('DESKTOP_THEME'));
    console.log(localStorageDataRes)
}
addThemeToLocalSt('theme')
getThemefromLocalSt()