document.addEventListener("scroll", () => {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const scrollPos = window.scrollY;

    // Перегортання сторінок
    if (scrollPos > 200) {
        page1.style.transform = `rotateY(${Math.min(180, (scrollPos - 200) / 3)}deg)`;
    }
    if (scrollPos > 800) {
        page2.style.transform = `rotateY(${Math.min(180, (scrollPos - 800) / 3)}deg)`;
    }
});
