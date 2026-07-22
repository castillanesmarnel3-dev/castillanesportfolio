// ===== Floating particles =====
function createParticles(count = 24) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.bottom = '-10px';
        p.style.animationDuration = (Math.random() * 12 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        document.body.appendChild(p);
    }
}
createParticles();

// ===== Active nav link =====
(function highlightNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ===== Animate skill bars when visible =====
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.getAttribute('data-width');
            entry.target.style.width = target + '%';
            barObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });
bars.forEach(bar => barObserver.observe(bar));

// ===== Card mouse-tracking glow =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', x + '%');
        card.style.setProperty('--y', y + '%');
    });
});

// ===== Back to top button =====
const topBtn = document.getElementById('topBtn');
if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) topBtn.classList.add('show');
        else topBtn.classList.remove('show');
    });
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Contact form (demo only - no backend) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('successMsg').style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            document.getElementById('successMsg').style.display = 'none';
        }, 4000);
    });
}

// ===== Click fireworks =====
function createFireworks(x, y, count = 18) {
    const colors = ['#7c5cff', '#00d4ff', '#ff6ec7', '#ffffff'];
    for (let i = 0; i < count; i++) {
        const burst = document.createElement('div');
        burst.className = 'firework';
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 120;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';
        burst.style.setProperty('--tx', dx + 'px');
        burst.style.setProperty('--ty', dy + 'px');
        burst.style.width = (4 + Math.random() * 8) + 'px';
        burst.style.height = burst.style.width;
        burst.style.background = colors[Math.floor(Math.random() * colors.length)];
        burst.style.animationDuration = (500 + Math.random() * 600) + 'ms';
        document.body.appendChild(burst);
        burst.addEventListener('animationend', () => burst.remove());
    }
}

window.addEventListener('click', (e) => {
    const tag = e.target.tagName.toLowerCase();
    if (['button', 'a', 'input', 'textarea', 'select', 'label'].includes(tag)) return;
    createFireworks(e.clientX, e.clientY);
});


