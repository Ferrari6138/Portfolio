// Toggle do menu mobile (hambúrguer)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Ativar link do menu conforme seção visível e animação on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // Destacar link de navegação ativo
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            // Acionar animação de revelar seção
            
        } else {
            
        }
    });
    // Header fixo ao rolar (após 100px)
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Fechar menu mobile ao rolar (caso esteja aberto)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Toggle de Tema (Claro/Escuro)
let themeToggle = document.querySelector('#theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    let icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
    }
}
