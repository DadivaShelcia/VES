// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Progress bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Back to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Countdown
const countdown = () => {
    const eventDate = new Date('March 13, 2026 10:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<h3>Evento já aconteceu!</h3>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = days < 10 ? '0' + days : days;
    document.querySelector('.hours').textContent = hours < 10 ? '0' + hours : hours;
    document.querySelector('.minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
};

setInterval(countdown, 1000);

// Partículas interativas
const particlesContainer = document.getElementById('particles');
const numParticles = 30;

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (5 + Math.random() * 5) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
}

document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    particles.forEach(part => {
        const speed = 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        part.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Validação simples do formulário
const form = document.getElementById('form-inscricao');
form.addEventListener('submit', (e) => {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    let valid = true;

    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(em => em.remove());

    if (nome === '') {
        showError(form.nome, 'Nome é obrigatório');
        valid = false;
    }

    if (email === '') {
        showError(form.email, 'E-mail é obrigatório');
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError(form.email, 'E-mail inválido');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

function showError(input, message) {
    const group = input.closest('.form-group');
    group.classList.add('error');
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    group.appendChild(error);
}