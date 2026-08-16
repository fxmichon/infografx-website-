export default class Lightbox {
    constructor() {
        this.items = [];
        this.index = 0;
        this.lastFocused = null;

        this.overlay = document.createElement("div");
        this.overlay.className = "lightboxOverlay";
        this.overlay.setAttribute("role", "dialog");
        this.overlay.setAttribute("aria-modal", "true");
        this.overlay.innerHTML = `
            <button type="button" class="lightboxClose" aria-label="Fermer">&times;</button>
            <button type="button" class="lightboxArrow lightboxArrowPrev" aria-label="Image précédente">&#8249;</button>
            <div class="lightboxContent">
                <div class="lightboxImageWrap">
                    <img class="lightboxImage" alt="">
                </div>
                <p class="lightboxCounter" hidden></p>
                <div class="lightboxCaption" hidden>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <button type="button" class="lightboxArrow lightboxArrowNext" aria-label="Image suivante">&#8250;</button>
        `;
        document.body.appendChild(this.overlay);

        this.imageEl = this.overlay.querySelector(".lightboxImage");
        this.counterEl = this.overlay.querySelector(".lightboxCounter");
        this.captionEl = this.overlay.querySelector(".lightboxCaption");
        this.captionTitleEl = this.captionEl.querySelector("h3");
        this.captionTextEl = this.captionEl.querySelector("p");
        this.closeBtn = this.overlay.querySelector(".lightboxClose");
        this.prevBtn = this.overlay.querySelector(".lightboxArrowPrev");
        this.nextBtn = this.overlay.querySelector(".lightboxArrowNext");

        this.closeBtn.addEventListener("click", () => this.close());
        this.prevBtn.addEventListener("click", () => this.prev());
        this.nextBtn.addEventListener("click", () => this.next());

        this.overlay.addEventListener("click", (e) => {
            if (e.target === this.overlay) this.close();
        });

        document.addEventListener("keydown", (e) => {
            if (!this.overlay.classList.contains("open")) return;
            if (e.key === "Escape") this.close();
            if (e.key === "ArrowRight") this.next();
            if (e.key === "ArrowLeft") this.prev();
        });

        // Swipe tactile simple
        let touchStartX = null;
        this.overlay.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });
        this.overlay.addEventListener("touchend", (e) => {
            if (touchStartX === null) return;
            const diff = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(diff) > 40) {
                diff > 0 ? this.prev() : this.next();
            }
            touchStartX = null;
        }, { passive: true });
    }

    next() {
        this.show(this.index + 1, "next");
    }

    prev() {
        this.show(this.index - 1, "prev");
    }

    /**
     * @param {Array<{src:string, alt?:string, caption?:string}>} items
     * @param {number} startIndex
     * @param {string} title - titre affiché au-dessus de la légende (optionnel)
     */
    open(items, startIndex = 0, title = "") {
        if (!items || !items.length) return;
        this.items = items;
        this.title = title;
        this.lastFocused = document.activeElement;

        const hasMultiple = items.length > 1;
        this.prevBtn.hidden = !hasMultiple;
        this.nextBtn.hidden = !hasMultiple;
        this.counterEl.hidden = !hasMultiple;

        this.show(startIndex);
        this.overlay.classList.add("open");
        document.body.style.overflow = "hidden";
        this.closeBtn.focus();
    }

    /**
     * @param {number} newIndex
     * @param {"next"|"prev"|null} direction - sens du glissement ; null = simple fondu (ouverture initiale)
     */
    show(newIndex, direction = null) {
        const len = this.items.length;
        this.index = ((newIndex % len) + len) % len;
        const item = this.items[this.index];

        this.imageEl.classList.remove("visible", "slide-from-left", "slide-from-right");
        if (direction === "next") this.imageEl.classList.add("slide-from-right");
        if (direction === "prev") this.imageEl.classList.add("slide-from-left");

        // On attend que la nouvelle image soit réellement prête avant de
        // déclencher la transition. Sinon le fondu/glissement se joue sur
        // une case vide pendant le chargement, et l'image "pop" d'un coup
        // dès qu'elle arrive : ça donne l'impression d'un changement instantané.
        const reveal = () => {
            void this.imageEl.offsetWidth; // force le navigateur à figer l'état de départ
            requestAnimationFrame(() => {
                requestAnimationFrame(() => this.imageEl.classList.add("visible"));
            });
        };

        this.imageEl.onload = null;
        this.imageEl.src = item.src;
        this.imageEl.alt = item.alt || "";

        if (this.imageEl.complete && this.imageEl.naturalWidth > 0) {
            reveal();
        } else {
            this.imageEl.onload = reveal;
        }

        if (len > 1) {
            this.counterEl.textContent = `${this.index + 1} / ${len}`;
        }

        const captionText = item.caption || "";
        if (this.title || captionText) {
            this.captionEl.hidden = false;
            this.captionTitleEl.textContent = this.title || "";
            this.captionTitleEl.hidden = !this.title;
            this.captionTextEl.textContent = captionText;
            this.captionTextEl.hidden = !captionText;
        } else {
            this.captionEl.hidden = true;
        }
    }

    close() {
        this.overlay.classList.remove("open");
        document.body.style.overflow = "";
        if (this.lastFocused) this.lastFocused.focus();
    }
}

/**
 * Rend cliquables (agrandissement plein écran) toutes les images d'un
 * mediaBlock. Si un bloc contient plusieurs images, elles deviennent
 * navigables avec les flèches.
 */
export function initMediaBlockLightbox(lightbox) {
    document.querySelectorAll(".mediaBlock").forEach((block) => {
        const imgs = Array.from(block.querySelectorAll(".mediaBlockMedia"));
        if (!imgs.length) return;

        const items = imgs.map((img) => ({
            src: img.currentSrc || img.src,
            alt: img.alt || "",
        }));

        imgs.forEach((img, i) => {
            img.tabIndex = 0;
            img.setAttribute("role", "button");
            img.setAttribute("aria-label", "Agrandir l'image");
            img.addEventListener("click", () => lightbox.open(items, i));
            img.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    lightbox.open(items, i);
                }
            });
        });
    });
}

/**
 * Rend chaque .card de la page Créations cliquable : ouvre une galerie
 * avec toutes les images du projet (déclarées dans un <script
 * type="application/json" class="cardGallery">) et navigation flèches.
 * Si aucune galerie n'est déclarée, retombe sur l'image unique de la carte.
 */
export function initCreationsGallery(lightbox) {
    document.querySelectorAll(".cards .card").forEach((card) => {
        const dataEl = card.querySelector("script.cardGallery");
        let items = null;

        if (dataEl) {
            try {
                items = JSON.parse(dataEl.textContent);
            } catch (err) {
                console.warn("Galerie JSON invalide pour une carte :", err);
            }
        }

        if (!items || !items.length) {
            const img = card.querySelector("img");
            items = img ? [{ src: img.src, alt: img.alt || "" }] : [];
        }
        if (!items.length) return;

        const titleEl = card.querySelector("h2");
        const descEl = card.querySelector("p");
        const title = titleEl ? titleEl.textContent.trim() : "";
        const fallbackDescription = descEl ? descEl.textContent.trim() : "";

        items = items.map((item) => ({
            ...item,
            caption: item.caption || fallbackDescription,
        }));

        card.classList.add("cardClickable");
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Voir le projet : ${title}`);

        const openGallery = () => lightbox.open(items, 0, title);
        card.addEventListener("click", openGallery);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openGallery();
            }
        });
    });
}
