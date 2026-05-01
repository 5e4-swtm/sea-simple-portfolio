const toggleButton = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

toggleButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        document.body.setAttribute('data-theme', 'light');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
});
