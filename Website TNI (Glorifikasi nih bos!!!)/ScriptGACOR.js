// Variabel untuk slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;

// Fungsi untuk menampilkan slide
function showSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dot yang aktif
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Tombol next
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Tombol previous
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Kontrol dengan dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide setiap 5 detik
let slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Scroll halus untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 90,
            behavior: 'smooth'
        });
    });
});

// Efek parallax untuk background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.body;
    
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});