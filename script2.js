function setupContactForm() {
    try {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                const name = form.querySelector('input[name="name"]').value.trim();
                const email = form.querySelector('input[name="email"]').value.trim();
                const message = form.querySelector('textarea[name="message"]').value.trim();
                
                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Success message
                alert('Thank you for contacting me!');
                form.reset();
            });
        }
    } catch (error) {
        console.error('Contact form setup error:', error);
        reportError(error);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setupHeaderScroll() {
    try {
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(10, 0, 26, 0.95)';
                } else {
                    header.style.background = 'rgba(10, 0, 26, 0.9)';
                }
            });
        }
    } catch (error) {
        console.error('Header scroll setup error:', error);
        reportError(error);
    }
}

// Add floating particles effect
function createFloatingParticles() {
    try {
        const particleCount = 50;
        const particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: ${Math.random() > 0.5 ? '#FF00FF' : '#00FFFF'};
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                opacity: 0.7;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            `;
            
            document.body.appendChild(particle);
            particles.push(particle);
        }
        
        // Add CSS animation for floating effect
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
    } catch (error) {
        console.error('Particles creation error:', error);
        reportError(error);
    }
}

// Initialize particles after DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingParticles);
} else {
    createFloatingParticles();
}
