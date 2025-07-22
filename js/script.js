document.addEventListener('DOMContentLoaded', function() {
    const accessibilityButtons = document.querySelectorAll('.btn-accessibility');
    let currentFontSize = 16;

    accessibilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();

            if (text === 'A-') {
                currentFontSize = Math.max(12, currentFontSize - 2);
                document.body.style.fontSize = currentFontSize + 'px';
            } else if (text === 'A+') {
                currentFontSize = Math.min(24, currentFontSize + 2);
                document.body.style.fontSize = currentFontSize + 'px';
            } else if (text === 'A') {
                currentFontSize = 16;
                document.body.style.fontSize = currentFontSize + 'px';
            } else if (this.querySelector('.fa-adjust')) {
                document.body.classList.toggle('high-contrast');
            }
        });
    });


    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Abrir vídeo - implementar modal ou redirecionamento');
        });
    });

    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    const mainImage = document.querySelector('.gallery-main img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            if (mainImage) {
                mainImage.src = this.src;
                mainImage.alt = this.alt;
            }
        });
    });

    const searchButton = document.querySelector('.btn-search');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-bar input');
            const searchTerm = searchInput.value.trim();

            if (searchTerm) {
                alert(`Buscar por: ${searchTerm}`);
            }
        });
    }


    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.style.display = 'none';

    const style = document.createElement('style');
    style.textContent = `
        .high-contrast {
            filter: contrast(150%) brightness(150%);
        }
        
        .mobile-menu-toggle {
            background: none;
            border: none;
            color: #333;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
            }
            
            .main-nav {
                display: none;
            }
            
            .main-nav.active {
                display: block;
            }
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '#ced4da';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    });
});

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}