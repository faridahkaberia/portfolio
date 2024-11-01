// about section
document.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about-container');
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (sectionPos < screenPos) {
        aboutSection.classList.add('visible');
    }
});

// Skills section
document.addEventListener('DOMContentLoaded', function () {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const width = skill.style.width; 
        skill.style.width = '0'; 
        setTimeout(() => {
            skill.style.width = width; 
        }, 100); 
    });
});

// Function to handle intersection (when the section is in view)
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally, stop observing once the animation has been triggered
            observer.unobserve(entry.target);
        }
    });
}

// Options for the observer (threshold defines when to trigger)
const options = {
    threshold: 0.3 // Trigger when 30% of the element is visible
};

// Create a new IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Select all the experience and education items
const experienceItems = document.querySelectorAll('.experience-item');
const educationItems = document.querySelectorAll('.education-item');

// Observe each item
experienceItems.forEach(item => observer.observe(item));
educationItems.forEach(item => observer.observe(item));


