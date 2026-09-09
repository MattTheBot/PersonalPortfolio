// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate toggle bars
        navToggle.classList.toggle('open');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('open');
        });
    });
}

// ===== Typewriter Effect (only on home page) =====
const typewriterElement = document.getElementById('typewriter-text');

if (typewriterElement) {
    const phrases = [
        'Full-Stack Developer',
        'UI/UX Enthusiast',
        'Problem Solver',
        'JavaScript Lover',
        'Code Craftsman'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Remove characters
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            // Add characters
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        // If word is complete, pause then start deleting
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 1500; // pause at end
        }
        // If deleted completely, move to next phrase
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start the typewriter
    typeWriter();
}
