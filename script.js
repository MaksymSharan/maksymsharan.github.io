document.addEventListener("scroll", () => {
    const cover = document.getElementById("cover");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const scrollPos = window.scrollY;

    // Зміна масштабу обкладинки
    cover.style.transform = `scale(${1 - scrollPos / 1000})`;

    // Плавне відкриття сторінок
    if (scrollPos > 300) page1.style.opacity = (scrollPos - 300) / 300;
    if (scrollPos > 800) page2.style.opacity = (scrollPos - 800) / 300;
});
