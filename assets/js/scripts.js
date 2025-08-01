document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // obtiene el archivo actual, ej: 'about.html'
    console.log(currentPath);
    
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPath || href === `./${currentPath}`) {
            link.classList.add("active");
        }
    });

    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = 250;

        // Cálculo de opacidad de 0 a 1
        const opacity = Math.min(scrollPosition / maxScroll, 1);

        // Aplicar fondo negro con opacidad progresiva
        header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
});
