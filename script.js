// Mobile Navigation Toggle
document.getElementById('mobileMenu').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
    this.textContent = this.textContent === '☰' ? '✕' : '☰';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                const mobileMenu = document.getElementById('mobileMenu');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.textContent = '☰';
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 21, 0.95)';
        nav.style.padding = '10px 40px';
    } else {
        nav.style.background = 'rgba(20, 20, 40, 0.9)';
        nav.style.padding = '15px 40px';
    }
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
});