// Injecte un bouton hamburger dans le header et gère l'ouverture/fermeture
// du menu mobile. Module autonome : à inclure sur CHAQUE page (pas
// seulement celles qui chargent main.js), pour que le menu mobile
// fonctionne même sur les pages plus légères (ex. contact.html).
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = header ? header.querySelector("nav") : null;
    if (!header || !nav) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "navToggle";
    toggle.setAttribute("aria-label", "Ouvrir le menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";
    header.insertBefore(toggle, nav);

    const closeNav = () => {
        nav.classList.remove("navOpenState");
        toggle.classList.remove("isOpen");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("navOpenState");
        toggle.classList.toggle("isOpen", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeNav();
    });

    // Si l'écran repasse en desktop (rotation, redimensionnement), on
    // s'assure que le menu ne reste pas ouvert en position mobile.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 780) closeNav();
    });
});
