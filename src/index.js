import './sass/main.scss';
import menu from './menu.json'
import menuItemsTpl from './templates/menu-items.hbs'
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    themeSwitchToggle: document.getElementById("theme-switch-toggle"),
    menuList: document.querySelector("ul.js-menu"),
};
SetTheme();
refs.themeSwitchToggle.addEventListener("change", onThemeSwitchToggleClicked);
function onThemeSwitchToggleClicked() {
    const theme = localStorage.getItem('theme');
    if (theme === Theme.LIGHT) {
        removeTheme(theme);
        addTheme(Theme.DARK);
    }
    else {
        removeTheme(theme);
        addTheme(Theme.LIGHT);
    }
}
function addTheme(theme) {
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}
function removeTheme(theme) {
    document.body.classList.remove(theme);
}
function SetTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
        theme = Theme.LIGHT;
        localStorage.setItem('theme', theme);
    }
    document.body.classList.add(theme);
    if (theme === Theme.DARK) refs.themeSwitchToggle.checked = true;
}

const menuMarkup = createMenuMarkup(menu);
function createMenuMarkup(menu) {
    return menu.map(menuItemsTpl).join('');
}
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);