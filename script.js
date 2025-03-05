// script.js

// Search/filter for icons
function searchIcons() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const icons = document.querySelectorAll('.icon-card');
    icons.forEach(icon => {
        const iconName = icon.querySelector('img').alt.toLowerCase();
        if (iconName.includes(searchQuery)) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
}

document.getElementById('searchBar')?.addEventListener('input', searchIcons);