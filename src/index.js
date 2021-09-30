import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    themeSwitchToggle: document.getElementById("theme-switch-toggle"),
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