export default class AnimateOnView {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);

        const defaultOptions = { threshold: 0.4 };
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

            const block = el.closest(".mediaBlock");
            if (!block) return;

            if (entry.isIntersecting) {
                el.classList.add("visible");
                el.classList.remove("exit");
            } else {
                el.classList.remove("visible");
                el.classList.add("exit");
            }
        });
    }
}

console.log("COMPONENT LOADED");