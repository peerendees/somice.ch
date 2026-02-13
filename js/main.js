/**
 * SoMICE Relaunch – Interaktivität
 * Responsives Menü, Glückskeks-Karten, Header-Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initFortuneCards();
    initHeaderScroll();
    initSmoothScroll();
});

/**
 * Responsives Navigationsmenü
 */
function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isOpen);
        menu.classList.toggle('is-open', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Menü schliessen bei Klick auf Link (Mobile)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 900) {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('is-open');
                document.body.style.overflow = '';
            }
        });
    });

    // Menü schliessen bei Klick ausserhalb
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('is-open') && !toggle.contains(e.target) && !menu.contains(e.target)) {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Glückskeks-Karten – Flip-Animation
 */
function initFortuneCards() {
    const cards = document.querySelectorAll('.fortune-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        // Keyboard-Unterstützung
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
                card.setAttribute('aria-pressed', card.classList.contains('flipped'));
            }
        });
    });
}

/**
 * Header – Shadow bei Scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            header.classList.toggle('scrolled', !entry.isIntersecting);
        },
        { threshold: 0.1, rootMargin: '-80px 0px 0px 0px' }
    );

    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
}

/**
 * Sanftes Scrollen für Anker-Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
