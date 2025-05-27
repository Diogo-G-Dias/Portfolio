// Modern Portfolio JavaScript

// Mobile Navigation Toggle with improved overlay
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');
    let overlay;
    
    // Create overlay element if it doesn't exist
    if (!document.querySelector('.overlay')) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    } else {
        overlay = document.querySelector('.overlay');
    }
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Toggle overlay
        overlay.classList.toggle('active');
        
        // Toggle body scroll
        if (nav.classList.contains('nav-active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        
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
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        overlay.classList.remove('active');
        burger.classList.remove('toggle');
        body.style.overflow = 'auto';
        
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            overlay.classList.remove('active');
            burger.classList.remove('toggle');
            body.style.overflow = 'auto';
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
}

// Enhanced Scroll Animation with Intersection Observer
const scrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill tag hover effect
const skillTagsAnimation = () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-5px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
        });
    });
}

// Add subtle parallax effect to hero section
const parallaxEffect = () => {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPosition = `50% ${scrollPosition * 0.05}px`;
        }
    });
}

// Add active class to current navigation link
const setActiveNavLink = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentPath = window.location.pathname;
    let currentPage = currentPath.split('/').pop();
    
    // If we're on the root page with no filename, set it to index.html
    if (currentPage === '') {
        currentPage = 'index.html';
    }
    
    // Remove any existing active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.parentElement) {
            link.parentElement.classList.remove('active');
        }
    });
    
    // Add active class to the current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check if the current page matches the link href
        // This handles both exact matches and cases where the href is part of the current path
        if (linkHref === currentPage || currentPath.endsWith('/' + linkHref)) {
            link.classList.add('active');
            // Also add active class to the parent li element
            if (link.parentElement) {
                link.parentElement.classList.add('active');
            }
        }
    });
    
    console.log('Current page:', currentPage);
}

// Initialize
const app = () => {
    // Add animate-on-scroll class to elements
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.add('animate-on-scroll');
    });
    
    // Initialize all functions
    navSlide();
    scrollAnimation();
    skillTagsAnimation();
    parallaxEffect();
    setActiveNavLink();
}

// Run on page load
document.addEventListener('DOMContentLoaded', app);
