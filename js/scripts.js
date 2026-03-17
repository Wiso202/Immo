// Interactions Générales
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar change de couleur au scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Smooth Scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simulation d'envoi de formulaire (Publier / Contact)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre demande a été transmise avec succès. Un agent vous contactera sur WhatsApp.');
            form.reset();
        });
    });
});