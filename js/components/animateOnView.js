export default class AnimateOnView {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);

        const defaultOptions = {
            threshold: 0.4,
            offset: -120 // décalage final pour ne pas être centré
        };

        this.options = { ...defaultOptions, ...options };

        this.observer = new IntersectionObserver(
            this.onIntersect.bind(this),
            { threshold: this.options.threshold }
        );

        this.elements.forEach(el => this.observer.observe(el));
    }

    onIntersect(entries) {
        entries.forEach(entry => {
            const el = entry.target;
            const direction = el.dataset.direction || "right"; // right | left

            if (entry.isIntersecting) {
                el.classList.add(`visible-${direction}`);
                el.classList.remove(`exit-${direction}`);
            } else {
                el.classList.remove(`visible-${direction}`);
                el.classList.add(`exit-${direction}`);
            }
        });
    }
}

console.log("COMPONENT LOADED");