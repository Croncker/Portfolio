var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("white-theme");

    if (document.body.classList.contains("white-theme")) {
        icon.classList.replace("fa-sun", "fa-moon"); // Troca de ícone
    } else {
        icon.classList.replace("fa-moon", "fa-sun"); // Volta o ícone original
    }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});
