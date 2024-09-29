// Select the dropdown element
const themeSelector = document.querySelector('select');

// Function to change the theme
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('footer img');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo-white.png';  // Change to white logo
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo.png';  // Change back to blue logo
    }
}

// Add event listener to the select element
themeSelector.addEventListener('change', changeTheme);
