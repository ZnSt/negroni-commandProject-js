const inputSwEl = document.querySelector('.dark-button');
const dataInput = document.querySelector('[data-switcher-desktop]');

inputSwEl.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  addThemeToLocalSt(currentTheme);
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    addThemeToLocalSt('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    addThemeToLocalSt('light');
  }
});

function addThemeToLocalSt(theme) {
  localStorage.setItem('DESKTOP_THEME', JSON.stringify(theme));
}

function getThemefromLocalSt() {
  return JSON.parse(localStorage.getItem('DESKTOP_THEME'));
}

export function whyTheme() {
  document.documentElement.setAttribute('data-theme', getThemefromLocalSt());
  if (getThemefromLocalSt() === 'dark') {
    dataInput.checked = true;
  } else {
    dataInput.checked = false;
  }
}
