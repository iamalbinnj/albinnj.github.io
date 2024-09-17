document.addEventListener('DOMContentLoaded', () => {
    const sections = ['home', 'about', 'education', 'projects', 'contact'];
    let activeSection = 'home';

    const updateActiveSection = () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element.offsetTop <= scrollPosition + 100) {
                activeSection = section;
            }
        });

        document.querySelectorAll('nav button').forEach(button => {
            if (button.dataset.section === activeSection) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveSection);

    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate tree branches
    sections.forEach((section, index) => {
        const branch = document.createElement('div');
        branch.className = 'tree-branch';
        document.getElementById(section).appendChild(branch);

        gsap.from(branch, {
            height: 0,
            duration: 2,
            scrollTrigger: {
                trigger: `#${section}`,
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });
    });

    // Animate leaf decorations
    const addLeaf = (parent, className) => {
        const leaf = document.createElement('div');
        leaf.className = `leaf-decoration ${className}`;
        parent.appendChild(leaf);

        gsap.to(leaf, {
            scale: 1,
            opacity: 1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    };

    addLeaf(document.querySelector('h1'), 'top-0 -right-2');
    addLeaf(document.querySelector('h1'), 'bottom-0 -left-2');
    document.querySelectorAll('h2').forEach(h2 => {
        addLeaf(h2, 'top-0 -right-4');
    });

    // Fade in sections
    sections.forEach(section => {
        gsap.from(`#${section} > div`, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: `#${section}`,
                start: 'top center+=100',
                end: 'center center',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Hover effects for project and education cards
    const cards = document.querySelectorAll('.bg-white');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });
});