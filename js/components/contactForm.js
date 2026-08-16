document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contactForm");
    if (!form) return;

    // Amélioration progressive : si JS est actif, on construit un mailto
    // avec un objet et un corps de message propres. Si JS est désactivé,
    // le formulaire retombe sur ses attributs action/method/enctype natifs
    // (défini en HTML) qui font à peu près la même chose, en moins soigné.
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // const name = form.querySelector("#name").value.trim();
        // const email = form.querySelector("#email").value.trim();
        const projectType = form.querySelector("#projectType").value;
        const message = form.querySelector("#message").value.trim();

        const subject = `Demande InfoGraFX — ${projectType}`;
        const body =
            // `Nom : ${name}\n` +
            // `Répondre à : ${email}\n` +
            // `Type de projet : ${projectType}\n\n` +
            // `Message :\n${message}`;
            `${message}`;

        const mailtoUrl =
            `mailto:infografx13@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    });
});
