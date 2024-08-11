document.querySelectorAll('.dropdown-toggle').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
