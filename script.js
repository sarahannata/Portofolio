function setActiveLink() {
    var currentPage = window.location.href.split('/').pop();

    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', setActiveLink);
