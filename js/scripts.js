// Interactions Générales - BENIN IMMO LUXE
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SÉLECTEURS ---
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#navLinks');

    // --- 2. GESTION DU MENU MOBILE (BURGER) ---
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Fermer le menu si on clique sur un lien (essentiel pour mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // --- 3. NAVBAR CHANGE DE STYLE AU SCROLL ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Utilise les classes CSS pour un rendu plus propre (Smart Theme)
            navbar.classList.add('scrolled');
            // Si tu veux garder le contrôle JS direct :
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- 4. SMOOTH SCROLL (SCROLL FLUIDE) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 5. SIMULATION D'ENVOI DE FORMULAIRE ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Animation de chargement simple
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Envoi en cours...";
            btn.style.opacity = "0.7";

            setTimeout(() => {
                alert('Félicitations ! Votre demande a été transmise avec succès à Benin Immo Luxe. Un expert vous contactera sur WhatsApp sous peu.');
                form.reset();
                btn.innerText = originalText;
                btn.style.opacity = "1";
            }, 1500);
        });
    });
});

// --- 6. FONCTION WHATSAPP GLOBALE ---
function openWhatsApp() {
    const phone = "2290140434120"; // Ton numéro expert
    const message = encodeURIComponent("Bonjour Benin Immo Luxe, je suis intéressé par l'un de vos biens.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
