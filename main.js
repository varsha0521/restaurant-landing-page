const galleryImages = document.querySelectorAll('.gallery-img');
const modalImage = document.getElementById('modalImage');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.getAttribute('data-bs-img');
    });
});
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 3) {
        alert('Name must be at least 3 characters long.');
        return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return;
    }

    alert('Message sent successfully!');
    contactForm.reset();
});
