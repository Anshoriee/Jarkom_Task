// Menampilkan pesan selamat datang saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di website tugas saya!");
};

// Animasi scroll untuk smooth scrolling ke link dalam halaman
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan efek ketika user menggulir halaman
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#f1c40f'; // Mengubah warna header saat scroll
    } else {
        header.style.backgroundColor = '#f6d365'; // Mengembalikan warna saat di atas
    }
};
