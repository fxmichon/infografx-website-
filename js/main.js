import AnimateOnView from "./components/animateOnView.js";
import Lightbox, { initMediaBlockLightbox, initCreationsGallery } from "./components/lightbox.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("MAIN JS LOADED");
    new AnimateOnView(".animated-image", { threshold: 0.4 });

    const lightbox = new Lightbox();
    initMediaBlockLightbox(lightbox);
    initCreationsGallery(lightbox);
});
