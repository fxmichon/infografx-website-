// Système de traduction léger, sans dépendance.
// - Le français n'a pas besoin d'être dupliqué : on le capture depuis le
//   HTML existant (innerHTML de chaque élément [data-i18n]) au chargement.
// - Seul l'anglais est fourni ci-dessous, clé par clé.
// - Le choix de langue est mémorisé dans localStorage (par défaut : fr).
const STORAGE_KEY = "infografx_lang";

const EN = {
    // --- Navigation (partagée sur toutes les pages) ---
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.creations": "Creations",
    "nav.about": "About",
    "nav.contact": "Contact",

    // --- Footer légal (partagé) ---
    "footer.cgv": "Terms of Service",
    "footer.legal": "Legal Notice",

    // --- index.html ---
    "home.hero.tagline": "3D modeling, texturing, engine integration and real-time interactions — for video games, film/TV and advertising.",
    "home.hero.subtitle": "A single point of contact at every stage of creation",
    "home.hero.cta": "Discuss your project",
    "home.pillars.creation.label": "Creation",
    "home.pillars.creation.title": "Modeling & Texturing",
    "home.pillars.creation.desc": "Hard-surface, realistic or low poly assets, realistic or stylized. PBR textures optimized for your engines and production constraints.",
    "home.pillars.creation.link": "See details →",
    "home.pillars.conseil.label": "Consulting",
    "home.pillars.conseil.title": "Pre-production consulting",
    "home.pillars.conseil.desc": "A consulting service before you start production: budget, timeline and technical complexity estimates, to secure your choices before fabrication.",
    "home.pillars.conseil.link": "See details →",
    "home.pillars.dev.label": "Development",
    "home.pillars.dev.title": "Unity & VR Interactions",
    "home.pillars.dev.desc": "Asset integration, custom shaders, interaction prototyping for video games, VR experiences and immersive demonstrators.",
    "home.pillars.dev.link": "See details →",
    "home.dualskills.title": "A multidisciplinary profile: 3D artist and developer",
    "home.dualskills.desc1": "The dual modeling / development skill set makes it possible to go beyond simply delivering assets: anticipating engine constraints, optimizing from the sculpt stage onward, and plugging the final render directly into Unity.",
    "home.dualskills.desc2": "The result: fewer back-and-forths between the art team and the tech team, and deliverables that are ready to use.",
    "home.footer.cta": "Got a project in mind? <a href=\"contact.html\" data-i18n=\"home.footer.ctaLink\">let's talk about it</a>.",
    "home.footer.ctaLink": "let's talk about it",

    // --- services.html ---
    "services.hero.title": "Services",
    "services.hero.tagline": "Three complementary areas, available separately or end to end.",
    "services.section.creation": "3D model creation",
    "services.block1.title": "Full 3D environment",
    "services.block1.desc1": "Full 3D scene modeling for video games or animation.",
    "services.block1.desc2": "Environments optimized for their final use: fixed render or real-time engine.",
    "services.block2.title": "Game-ready assets for game engines",
    "services.block2.desc1": "Realistic or stylized style, matched to your production's art direction.",
    "services.block2.desc2": "Optimized export for Unity or Unreal Engine (LODs, collisions, file naming).",
    "services.block2.desc3": "Delivered with source files (high resolution, uncompressed textures, working scene).",
    "services.block3.title": "Texturing & shading",
    "services.block3.desc1": "PBR textures (albedo, roughness, normal, metallic...) painted or procedurally generated to match the desired look: hyperrealistic, stylized, cartoon, hand-painted.",
    "services.block3.desc2": "Consistent style guaranteed across a full batch of assets, for a cohesive visual identity.",
    "services.block4.title": "Simple animation",
    "services.block4.desc1": "Short animation cycles (interactive props, mechanisms, ambient loops, motion previsualization) to bring an object to life or test a staging idea.",
    "services.block4.desc2": "Suited to one-off needs for a video game project or an ad, without mobilizing a full animation studio.",
    "services.section.dev": "Unity development",
    "services.block5.title": "Video game & VR interactions",
    "services.block5.desc1": "Development of interaction mechanics in Unity: object manipulation, triggers, scripted behaviors for video games, VR experiences or immersive demonstrators.",
    "services.block5.desc2": "Direct integration of in-house assets, with no loss of fidelity between modeling and the real-time engine.",
    "services.block6.title": "Custom asset & shader integration",
    "services.block6.desc1": "Import and configuration of ready-to-use assets (market libraries or client-supplied): materials, collisions, scale, scene hierarchy.",
    "services.block6.desc2": "Writing custom shaders (Shader Graph or code) for specific visual effects: stylization, dissolve, holograms, water or material effects.",
    "services.section.conseil": "Pre-production consulting & advice",
    "services.block7.title": "Securing your project before you launch it",
    "services.block7.desc1": "Estimating the technical complexity of a scene or a batch of assets, and their production time.",
    "services.block7.desc2": "Art style research.",
    "services.block7.desc3": "Pipeline recommendations: required level of detail, tool choices, task allocation between in-house team and contractors.",
    "services.block7.desc4": "Realistic budget and timeline estimates.",
    "services.footer.cta": "A project in mind, or a need that doesn't fit any box above? <a href=\"contact.html\" data-i18n=\"services.footer.ctaLink\">Let's talk</a>.",
    "services.footer.ctaLink": "Let's talk",

    // --- apropos.html ---
    "about.hero.title": "About me",
    "about.hero.tagline": "A path between science, 3D and visual creation, in the service of immersive and technical projects.",
    "about.intro.title": "From the scientific world to 3D creation",
    "about.intro.desc1": "My path started in neuroscience, working on immersive devices and virtual environments in a research context. That's where I discovered the richness of 3D creation and interactive experiences.",
    "about.intro.desc2": "Back in France, I joined a platform specialized in virtual reality. There I developed 3D environments, optimized assets and immersive prototypes, working alongside multidisciplinary teams.",
    "about.intro.desc3": "Today, through my company InfoGraFX, I design 3D assets, scenes and technical visuals with an approach that blends rigor, clarity and artistic sensibility.",
    "about.pillars.title": "What this path brings, concretely",
    "about.pillars.rigueur.label": "Rigor",
    "about.pillars.rigueur.title": "A method rooted in research",
    "about.pillars.rigueur.desc": "A habit of measurement, reproducibility and documentation — useful for scoping a budget or a scene's complexity without guesswork.",
    "about.pillars.dev.label": "Development",
    "about.pillars.dev.title": "Beyond basic Unity scripting",
    "about.pillars.dev.desc": "Desktop tools built from scratch (a complex graphics editor, a tracking application) that show real fluency in C#/.NET, not just asset integration.",
    "about.pillars.immersion.label": "Immersion",
    "about.pillars.immersion.title": "Real-world VR experience",
    "about.pillars.immersion.desc": "Designing immersive environments in a research context before doing so commercially — a solid understanding of what actually works in VR.",
    "about.footer.cta": "Want to see the technical projects in more detail (Unity VR, C# tools)? <a href=\"contact.html\" data-i18n=\"about.footer.ctaLink\">let's talk about your project directly</a>.",
    "about.footer.ctaLink": "let's talk about your project directly",

    // --- contact.html ---
    "contact.hero.title": "Contact",
    "contact.hero.tagline": "A project, a quote, or just a technical question: tell us what you need.",
    "contact.form.projectType": "Project type",
    "contact.form.option.modeling": "Modeling / Texturing",
    "contact.form.option.animation": "Animation",
    "contact.form.option.conseil": "Consulting / Project scoping",
    "contact.form.option.dev": "Unity / VR Development",
    "contact.form.option.other": "Other",
    "contact.form.message": "Describe what you need",
    "contact.form.submit": "Send",
    "contact.mailtoNote": "By clicking \"Send\", your default email app will open with the message pre-filled, ready to be sent from your own address. No email client installed? Write to us directly at <a href=\"mailto:infografx13@gmail.com\">infografx13@gmail.com</a>.",
    "contact.info.title": "Response within 48 business hours.",

    // --- creations.html ---
    "creations.hero.title": "Creations",
    "creations.hero.tagline": "A selection of recent projects. The gallery grows as new work is completed.",
    "creations.card1.title": "Various 3D assets",
    "creations.card1.desc": "Prop optimized for a real-time engine, delivered with source files and complete PBR textures.",
    "creations.card2.title": "Full 3D environments",
    "creations.card2.desc": "Modeling of a complete environment for a VR application.",
    "creations.card3.title": "Complete VR experience creation",
    "creations.card3.desc": "Virtual tour application of Québec: 3D environment creation, organization and editing of 360° and 2D photos, interaction setup.",
    "creations.footer.cta": "A project in mind? <a href=\"contact.html\" data-i18n=\"creations.footer.ctaLink\">let's talk about your project</a>.",
    "creations.footer.ctaLink": "let's talk about your project",

    // --- cvg.html (Conditions Générales de Vente) ---
    "cgv.hero.title": "Terms of Service",
    "cgv.hero.tagline": "Legal framework for InfoGraFX services: 3D creation, technical visuals and digital environments.",
    "cgv.intro": "<strong>Provider:</strong> InfoGraFX, a French sole proprietorship (micro-entreprise) represented by François-Xavier Michon — SIRET 10846572500019 — contact: <a href=\"mailto:infografx13@gmail.com\">infografx13@gmail.com</a>. This Terms of Service applies to any service ordered from InfoGraFX, unless otherwise agreed in writing. <em>The French version of this document is the legally binding reference; this English version is provided for convenience.</em>",
    "cgv.s1.title": "1. Purpose",
    "cgv.s1.desc": "These Terms of Service govern the services offered by InfoGraFX, an independent studio specializing in 3D creation, technical visuals, digital environments and graphic content for creative, educational or professional projects.",
    "cgv.s2.title": "2. Nature of the services",
    "cgv.s2.desc": "InfoGraFX's services are artistic and technical in nature. They are a best-efforts obligation, not an obligation of result. Deliverables may include: 3D models, textures, renders, animations, technical visuals, scenes, assets or related documents.",
    "cgv.s3.title": "3. Order and scope",
    "cgv.s3.desc": "An order is confirmed once the quote or commercial proposal is accepted. The scope of the assignment is defined in that document. Included revisions are specified there. Any change outside the agreed scope, change of art direction, or added functionality may be subject to additional billing.",
    "cgv.s4.title": "4. Pricing and invoicing",
    "cgv.s4.desc": "Prices are expressed in euros. <strong>VAT not applicable, article 293 B of the French General Tax Code</strong> (VAT exemption for small businesses / micro-entreprise). Any additional service not initially planned will be the subject of an additional quote. Invoices are payable according to the terms indicated (bank transfer, platform, etc.).",
    "cgv.s5.title": "5. Payment and delivery",
    "cgv.s5.desc": "Deliverables are handed over after full payment, unless otherwise agreed. Any late or missing payment suspends delivery and usage rights. Delivery timelines are indicative; a delay cannot give rise to a penalty or cancellation.",
    "cgv.s6.title": "6. Intellectual property",
    "cgv.s6.desc1": "Creations made as part of an InfoGraFX service are original or based on royalty-free resources cleared for commercial use. Usage, reproduction and distribution rights for these creations are transferred to the client upon full payment. InfoGraFX retains its moral rights over the creations, unless otherwise agreed.",
    "cgv.s6.desc2": "Some visuals shown on this site as portfolio pieces were produced as part of a previous salaried position (academic research); the associated models and source files belong to that employer and are neither transferred nor made available. Only the visual renders are shown, for the purpose of demonstrating skill.",
    "cgv.s7.title": "7. Client responsibility",
    "cgv.s7.desc": "The client is responsible for integrating, using, distributing and further modifying InfoGraFX deliverables. The studio cannot be held liable for consequences arising from use that is non-compliant or different from what was initially intended.",
    "cgv.s8.title": "8. Limitation of liability",
    "cgv.s8.desc": "InfoGraFX does not guarantee any financial, commercial or operational outcome. The studio cannot be held liable for indirect losses, project delays, integration issues or damages related to the final use of the deliverables.",
    "cgv.s9.title": "9. Confidentiality",
    "cgv.s9.desc": "Information provided by the client is confidential and used only within the scope of the service.",
    "cgv.s10.title": "10. Right of withdrawal",
    "cgv.s10.desc": "In accordance with article L221-28 of the French Consumer Code, the right of withdrawal does not apply to contracts for the supply of digital content or bespoke creative services, made to the client's specifications and personalized. By placing an order, the individual client acknowledges that the service is custom-made and expressly waives their right of withdrawal once work has begun with their agreement before the 14-day legal period expires.",
    "cgv.s11.title": "11. Disputes, governing law and mediation",
    "cgv.s11.desc": "These Terms of Service are governed by French law. In the event of a disagreement, an amicable solution will be sought first. For services carried out via a platform (Fiverr, Upwork), that platform's internal mediation is used before any other step. Failing an amicable agreement, the dispute will be submitted to the courts having jurisdiction over the provider's place of business, subject to any mandatory provisions protecting consumers.",
    "cgv.s12.title": "12. Acceptance of these Terms",
    "cgv.s12.desc": "Confirming a quote, an order or a service implies full and unreserved acceptance of these Terms of Service.",
    "cgv.footer.cta": "Need more information? <a href=\"contact.html\" data-i18n=\"cgv.footer.ctaLink\">Contact InfoGraFX</a>.",
    "cgv.footer.ctaLink": "Contact InfoGraFX",

    // --- mentions-legales.html ---
    "legal.hero.title": "Legal Notice",
    "legal.hero.tagline": "Regulatory information about the publishing and hosting of this site.",
    "legal.editor.title": "Site publisher",
    "legal.editor.desc": "The InfoGraFX site is published by François-Xavier Michon, operating as a sole proprietorship (micro-entreprise) under the trade name InfoGraFX.<br>SIRET: 10846572500019<br>Address: [To be completed]<br>Email: <a href=\"mailto:infografx13@gmail.com\">infografx13@gmail.com</a>",
    "legal.director.title": "Publication director",
    "legal.director.desc": "François-Xavier Michon, as the person responsible for the InfoGraFX sole proprietorship.",
    "legal.hosting.title": "Site hosting",
    "legal.hosting.desc": "This site is hosted by GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
    "legal.domain.title": "Domain name",
    "legal.domain.desc": "This site's domain name is registered with OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.",
    "legal.ip.title": "Intellectual property",
    "legal.ip.desc": "All content on this site (text, logo, layout) is the property of InfoGraFX, unless otherwise stated, and may not be reproduced, distributed or used without prior written authorization. Some 3D visuals shown as portfolio pieces were produced as part of a previous salaried position; the associated models and source files remain the property of that employer and are neither transferred nor made available — only the visual renders are shown, for the purpose of demonstrating skill.",
    "legal.data.title": "Personal data",
    "legal.data.desc": "This site does not set any tracking cookies or advertising trackers. The contact form opens your own email client: the information you enter there (name, email, message) is sent directly from your mailbox to InfoGraFX and does not pass through any third-party server or database. In accordance with GDPR, you have the right to access, rectify and delete any data you send us this way, which you can exercise by writing to <a href=\"mailto:infografx13@gmail.com\">infografx13@gmail.com</a>.",
    "legal.credits.title": "Credits",
    "legal.credits.desc": "Design, development and 3D creations: InfoGraFX. Typeface: Manrope (Google Fonts).",
    "legal.footer.cta": "A question about this notice? <a href=\"contact.html\" data-i18n=\"legal.footer.ctaLink\">Contact InfoGraFX</a>.",
    "legal.footer.ctaLink": "Contact InfoGraFX",
};

function getStoredLang() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null;
    }
}

function setStoredLang(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        /* stockage indisponible : on continue sans persister */
    }
}

function initI18n() {
    const elements = document.querySelectorAll("[data-i18n]");
    if (!elements.length) return;

    // Capture du français directement depuis le HTML existant.
    const frText = {};
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!(key in frText)) frText[key] = el.innerHTML;
    });

    const dictionaries = { fr: frText, en: EN };

    function applyLang(lang) {
        const dict = dictionaries[lang] || dictionaries.fr;
        elements.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            } else if (frText[key] !== undefined) {
                // Traduction manquante pour cette clé : on retombe sur le français
                // plutôt que d'afficher un vide.
                el.innerHTML = frText[key];
            }
        });

        document.documentElement.lang = lang;
        setStoredLang(lang);

        document.querySelectorAll(".langCurrent").forEach((el) => {
            el.textContent = lang.toUpperCase();
        });
        document.querySelectorAll(".langCurrentFlag").forEach((img) => {
            img.src = `./assets/Icons/lang_${lang}.png`;
        });
        document.querySelectorAll(".langOption").forEach((btn) => {
            btn.classList.toggle("isActive", btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll(".langOption").forEach((btn) => {
        btn.addEventListener("click", () => {
            applyLang(btn.dataset.lang);
            document.querySelectorAll(".langSwitch").forEach((el) => el.classList.remove("isOpen"));
        });
    });

    const initialLang = getStoredLang() || "fr";
    applyLang(initialLang);
}

function initLangDropdown() {
    document.querySelectorAll(".langSwitch").forEach((wrapper) => {
        const toggle = wrapper.querySelector(".langSwitchToggle");
        if (!toggle) return;

        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = wrapper.classList.toggle("isOpen");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".langSwitch.isOpen").forEach((el) => el.classList.remove("isOpen"));
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".langSwitch.isOpen").forEach((el) => el.classList.remove("isOpen"));
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initI18n();
    initLangDropdown();
});
