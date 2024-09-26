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




let dots = document.querySelectorAll('.dot');
let projects = document.querySelectorAll('.projects-info');


function currentSlide(slideIndex) {
    projects.forEach((project) => {
        project.style.display = 'none';
        project.classList.remove('active');
    });

    if (slideIndex === 1) {
        for (let i = 0; i < 3; i++) {
            projects[i].style.display = 'block';
            projects[i].classList.add('active');
        }
    } else if (slideIndex === 2) {
        for (let i = 3; i < 6; i++) {
            projects[i].style.display = 'block';
            projects[i].classList.add('active');
        }
    } else if (slideIndex === 3) {
        for (let i = 6; i < 9; i++) {
            projects[i].style.display = 'block';
            projects[i].classList.add('active');
        }
    }

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

currentSlide(1);




