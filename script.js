// Dapatkan semua bagian dan tautan navigasi
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Fungsi untuk menyorot tautan navigasi saat scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Bonus: Animasi "reveal" saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } else {
            // Hapus class jika ingin animasi berulang saat scroll ke atas lagi
            // entry.target.classList.remove('show-animate');
        }
    });
});

const elementsToAnimate = document.querySelectorAll('section, footer');
elementsToAnimate.forEach((el) => observer.observe(el));

// Tambahkan CSS untuk animasi di file style.css Anda
/*
Tambahkan kode CSS berikut di bagian bawah file style.css Anda untuk efek animasi ini

section, footer {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.show-animate,
footer.show-animate {
    opacity: 1;
    transform: translateY(0);
}

*/

// Dapatkan semua bagian dan tautan navigasi
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Fungsi untuk menyorot tautan navigasi saat scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Bonus: Animasi "reveal" saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
});

const elementsToAnimate = document.querySelectorAll('section');
elementsToAnimate.forEach((el) => observer.observe(el));