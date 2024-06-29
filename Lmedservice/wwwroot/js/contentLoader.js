// contentLoader.js

document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            loadContent(url);
        });
    });

    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('right-panel-content').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }
});
