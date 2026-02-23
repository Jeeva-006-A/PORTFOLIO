/**
 * Jeeva Portfolio - Professional Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Elements on Scroll
    const revealElements = () => {
        const reveals = document.querySelectorAll('.section-title, .about-content, .skills-column, .project-card, .inspiration-content, .hobby-card, .tech-projects-col, .life-skills-col, .subsection-title, .tech-skills-header, .summary-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    };

    // 2. Animate Skill Bars
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width;
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            // Store the initial width and set it to 0
            const style = bar.getAttribute('style');
            const match = style.match(/width:\s*(\d+%);/);
            if (match) {
                bar.setAttribute('data-width', match[1]);
                bar.style.width = '0';
            }
            observer.observe(bar);
        });
    };

    // 3. active Link Highlighting
    const activeLinkHighlight = () => {
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            // Get all targets that have corresponding nav links
            const targets = document.querySelectorAll('section, header, [id="lifeskills"]');

            targets.forEach(target => {
                const targetTop = target.offsetTop;
                const targetHeight = target.clientHeight;
                if (pageYOffset >= (targetTop - 250)) {
                    current = target.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    };

    // 4. Back to Top Button
    const createBackToTop = () => {
        const btn = document.createElement('button');
        btn.id = 'backToTop';
        btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // 5. Dynamic Typing Effect (Simple)
    const typingEffect = () => {
        const subtitle = document.querySelector('.subtitle');
        if (!subtitle) return;

        const text = subtitle.innerText;
        subtitle.innerText = '';
        subtitle.style.minHeight = '3em'; // Prevent layout shift

        let i = 0;
        const speed = 30; // ms

        function type() {
            if (i < text.length) {
                subtitle.innerText += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        // Wait for hero fade-in animation
        setTimeout(type, 1000);
    };

    // 6. Navigation Background change on scroll
    const navScroll = () => {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    };

    // Initialize all
    revealElements();
    animateSkills();
    activeLinkHighlight();
    createBackToTop();
    typingEffect();
    navScroll();
});
