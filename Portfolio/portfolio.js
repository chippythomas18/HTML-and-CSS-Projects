// Set the current year in the footer
const footerYear = document.querySelector('.footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Update active nav link when sections scroll into view
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function setActiveLink() {
    let index = sections.length;
    while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Smooth scroll behavior for nav links
navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        if (this.classList.contains('contact-link')) {
            event.preventDefault();
            openForm();
            return;
        }

        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form popup behavior
const contactToggleBtn = document.getElementById('contactToggleBtn');
const contactButtons = document.querySelectorAll('.contact-link, .contact-toggle-btn, .open-contact-btn');

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
     document.getElementById("myForm").style.display = "none";
}

window.openForm = openForm;
window.closeForm = closeForm;

contactButtons.forEach((button) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        openForm();
    });
});

document.addEventListener('click', function(event) {
    const popup = document.getElementById('myForm');
    if (popup && popup.classList.contains('open')) {
        const container = popup.querySelector('.form-container');
        if (!container.contains(event.target) && !event.target.closest('.open-contact-btn') && !event.target.closest('.contact-link')) {
            closeForm();
        }
    }
});

// Featured image dot slider behavior
function currentSlide(index) {
    const slides = document.querySelectorAll('.slideshow-section .slide');
    const dots = document.querySelectorAll('.dot');
    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index - 1);
    });
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index - 1);
    });
}

window.currentSlide = currentSlide;
