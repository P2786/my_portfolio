document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize Typed.js
        if (typeof Typed !== 'undefined') {
            new Typed('#typed', {
                strings: ['AI - ML Enthusiast','Front-End Developer', 'Full-Stack Devloper', 'Future-Ready Coder'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true
            });
        }

        // Generate projects
        generateProjects();

        // Smooth scrolling
        setupSmoothScroll();

        // Contact form handling
        setupContactForm();

        // Add scroll effect to header
        setupHeaderScroll();

        // Explore button functionality
        setupExploreButton();

    } catch (error) {
        console.error('Script initialization error:', error);
        reportError(error);
    }
});

function generateProjects() {
    try {
        const projects = [
            {
                title: 'Restaurant Booking System',
                description: 'Complete restaurant booking system with HTML, CSS & JavaScript',
                tags: ['HTML', 'CSS', 'JavaScript']
            },
             {
                title: 'E-Commerce',
                description: 'Real-time Shoping with PHP, MySQL & AJAX',
                tags: ['PHP', 'JavaScript', 'AJAX']
            },
            {
                title: 'To-Do & Notes App',
                description: 'Team-based productivity and notes management system with local storage.',
                tags: ['HTML', 'CSS', 'LocalStorage']
            },
            
            {
                title: 'ChatMitra',
                description: 'Real-time chat application with theme switching and image sharing capabilities with Netlify frontend and PHP+MySQL backend.',
                tags: ['PHP', 'MySQL', 'Netlify']
            },
            {
                title: 'Stock Price Predication',
                description: 'ML-based webcam emotion detection system using OpenCV and computer vision.',
                tags: ['Python', 'OpenCSV', 'Machine Learning']
            }
        ];

        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = projects.map(project => `
                <div class="project-card" data-name="project-card" data-file="script.js">
                    <h3 class="project-title" data-name="project-title" data-file="script.js">${project.title}</h3>
                    <p class="project-description" data-name="project-description" data-file="script.js">${project.description}</p>
                    <div class="project-tags" data-name="project-tags" data-file="script.js">
                        ${project.tags.map(tag => `<span class="project-tag" data-name="project-tag" data-file="script.js">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Projects generation error:', error);
        reportError(error);
    }
}

function setupSmoothScroll() {
    try {
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Smooth scroll setup error:', error);
        reportError(error);
    }
}

function setupExploreButton() {
    try {
        const exploreBtn = document.querySelector('.explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function() {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    } catch (error) {
        console.error('Explore button setup error:', error);
        reportError(error);
    }
}
