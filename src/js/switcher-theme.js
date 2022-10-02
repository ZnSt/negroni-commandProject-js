const inputSwEl = document.querySelector('.dark-button');

inputSwEl.addEventListener('click', event => {
  const currentTheme = document.documentElement.dataset.theme;
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

const KEY = 'theme';

function getItem() {
  localStorage.getItem(KEY);
}

function setItem(value) {
  localStorage.setItem(KEY, value);
}
