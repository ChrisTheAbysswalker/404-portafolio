export class HeaderManager {
    constructor(headerSelector, navSelector, maxScroll = 250) {
        this.header = document.querySelector(headerSelector);
        this.navLinks = document.querySelectorAll(`${navSelector} a`);
        this.maxScroll = maxScroll;
    }

    init() {
        this.highlightActiveLink();
        this.handleScroll();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname.split("/").pop();

        this.navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === currentPath || href === `./${currentPath}`) {
                link.classList.add("active");
            }
        });
    }

    handleScroll() {
        const scrollPosition = window.scrollY;
        const opacity = Math.min(scrollPosition / this.maxScroll, 1);
        this.header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
}
