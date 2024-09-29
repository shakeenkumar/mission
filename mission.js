const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('footer img');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.png'; // Use the white logo for dark theme
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo.png'; // Use the blue logo for light theme
    }
}

themeSelector.addEventListener('change', changeTheme);
