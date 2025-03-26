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

function searchShortcuts() {
    const input = document.getElementById('search').value.toLowerCase();
    const shortcuts = document.getElementById('shortcut-list').getElementsByTagName('li');

    for (let shortcut of shortcuts) {
        const title = shortcut.getElementsByTagName('h2')[0].innerText.toLowerCase();
        shortcut.style.display = title.includes(input) ? '' : 'none';
    }
}

function filterShortcuts() {
    const category = document.getElementById('category-select').value;
    const shortcuts = document.getElementById('shortcut-list').getElementsByTagName('li');

    for (let shortcut of shortcuts) {
        const shortcutCategory = shortcut.getAttribute('data-category');
        shortcut.style.display = category === 'all' || shortcutCategory === category ? '' : 'none';
    }
}