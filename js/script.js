AOS.init({ duration: 1000, once: true, offset: 100 });

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (winScroll / height) * 100 + '%';
});

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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