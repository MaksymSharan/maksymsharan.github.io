document.addEventListener("scroll", () => {
    const cover = document.getElementById("cover");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const scrollPosition = window.scrollY;

    // Ефект зменшення обкладинки
    if (scrollPosition < 300) {
        cover.style.transform = `scale(${1 - scrollPosition / 1000})`;
    }

    // Плавна поява першої сторінки
    if (scrollPosition > 300) {
        page1.style.opacity = (scrollPosition - 300) / 300;
    }

    // Плавна поява другої сторінки
    if (scrollPosition > 900) {
        page2.style.opacity = (scrollPosition - 900) / 300;
    }
});
