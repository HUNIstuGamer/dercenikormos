// Vissza a tetejére gomb létrehozása
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Vissza a tetejére';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

// Görgetés esemény kezelése
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Visszagörgetés a tetejére
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Űrlap validálás
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Kérjük, töltsön ki minden mezőt!');
    } else {
        alert('Köszönjük, hogy üzenetet küldött!');
    }
});

// Lightbox funkció a galériához
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
const lightboxImage = document.createElement('img');

lightbox.className = 'lightbox';
document.body.appendChild(lightbox);
lightbox.appendChild(lightboxImage);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


// Szolgáltatások szűrő funkció
const serviceFilter = document.createElement('input');
serviceFilter.type = 'text';
serviceFilter.placeholder = 'Keresés a szolgáltatások között...';
document.querySelector('.services-section .container').insertBefore(serviceFilter, document.querySelector('.services'));

serviceFilter.addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const serviceName = service.querySelector('h3').textContent.toLowerCase();
        if (serviceName.includes(filterValue)) {
            service.style.display = '';
        } else {
            service.style.display = 'none';
        }
    });
});


// Social Media lebegő gombok
const socialMediaButtons = document.createElement('div');
socialMediaButtons.className = 'social-media-buttons';
document.body.appendChild(socialMediaButtons);

const socialMediaLinks = [
    { href: 'https://www.facebook.com', icon: '📘' },
    { href: 'https://www.instagram.com', icon: '📸' },
    { href: 'https://www.twitter.com', icon: '🐦' }
];

socialMediaLinks.forEach(link => {
    const button = document.createElement('a');
    button.href = link.href;
    button.target = '_blank';
    button.innerHTML = link.icon;
    button.className = 'social-button';
    socialMediaButtons.appendChild(button);
});


// Automatikus galéria diavetítés
let currentIndex = 0;
const galleryImagesArray = Array.from(galleryImages);

function showNextImage() {
    galleryImagesArray[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % galleryImagesArray.length;
    galleryImagesArray[currentIndex].classList.add('visible');
}

setInterval(showNextImage, 3000);



// Popup hirdetés vagy feliratkozás
const popup = document.createElement('div');
popup.className = 'popup';
popup.innerHTML = `
    <div class="popup-content">
        <h2>Különleges ajánlat!</h2>
        <p>Iratkozzon fel hírlevelünkre, és kapjon 10% kedvezményt az első látogatására!</p>
        <button id="close-popup">Bezár</button>
    </div>
`;

document.body.appendChild(popup);

document.getElementById('close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
});

// Popup megjelenése 10 másodperc után
setTimeout(() => {
    popup.style.display = 'flex';
}, 10000);



// Időpont foglalás naptár (alap naptár kijelzés)
const calendar = document.createElement('input');
calendar.type = 'date';
calendar.id = 'appointment-date';
calendar.style.display = 'block';
calendar.style.margin = '20px auto';
calendar.style.padding = '10px';
calendar.style.fontSize = '16px';

document.querySelector('.contact-section .container').appendChild(calendar);




// Árlista megjelenítése kattintásra
const showPricesButton = document.createElement('button');
showPricesButton.textContent = 'Árlista megtekintése';
showPricesButton.className = 'show-prices-button';
document.querySelector('.services-section .container').appendChild(showPricesButton);

const priceList = document.createElement('div');
priceList.className = 'price-list';
priceList.innerHTML = `
    <h3>Árlista</h3>
    <ul>
        <li>Műkörömépítés - 5000 Ft</li>
        <li>Gél lakkozás - 3500 Ft</li>
        <li>Körömápolás - 2500 Ft</li>
    </ul>
`;
priceList.style.display = 'none';
document.querySelector('.services-section .container').appendChild(priceList);

showPricesButton.addEventListener('click', () => {
    priceList.style.display = priceList.style.display === 'none' ? 'block' : 'none';
});



