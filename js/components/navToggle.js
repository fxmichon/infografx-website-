document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = header ? header.querySelector("nav") : null;
    if (!header || !nav) return;

    if (document.querySelector(".navToggle")) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "navToggle";
    toggle.setAttribute("aria-label", "Ouvrir le menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    // Insère le bouton dans headerRight
    const headerRight = header.querySelector(".headerRight");
    if (headerRight) {
        headerRight.appendChild(toggle);
    } else {
        header.appendChild(toggle);
    }

    const closeNav = () => {
        nav.classList.remove("navOpenState");
        toggle.classList.remove("isOpen");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = nav.classList.toggle("navOpenState");
        toggle.classList.toggle("isOpen", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            closeNav();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) closeNav();
    });
});