// Menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Fecha menu ao clicar em link
navbar.querySelectorAll('a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');

function updateProgress() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
}

// Active nav link por seção
const sections  = document.querySelectorAll('section');
const navLinks  = document.querySelectorAll('header nav a');

function highlightNav() {
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const top    = sec.offsetTop - 180;
        const bottom = top + sec.offsetHeight;
        const id     = sec.getAttribute('id');

        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`header nav a[href="#${id}"]`);
            if (active) active.classList.add('active');
        }
    });
}

// Fecha menu no scroll
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    updateProgress();
    highlightNav();
});

// Reveal on scroll — Intersection Observer
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// Init
updateProgress();
highlightNav();
