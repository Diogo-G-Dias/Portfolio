// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Scroll Animation
const scrollAnimation = () => {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.category-card');
    
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        
        // Fade in elements as they come into view
        sections.forEach(section => {
            let offset = section.offsetTop - window.innerHeight * 0.8;
            if (scrollPosition >= offset) {
                section.classList.add('fade-in');
            }
        });
        
        // Stagger card animations
        cards.forEach((card, index) => {
            let offset = card.offsetTop - window.innerHeight * 0.9;
            if (scrollPosition >= offset) {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 100);
            }
        });
    });
}

// Initialize
const app = () => {
    navSlide();
    scrollAnimation();
}

document.addEventListener('DOMContentLoaded', app);
