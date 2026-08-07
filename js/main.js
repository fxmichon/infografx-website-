import AnimateOnView from "./components/animateOnView.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("MAIN JS LOADED");
    new AnimateOnView(".animated-image", { threshold: 0.4 });

    document.querySelectorAll('.mediaBlockMedia').forEach(img => {
    img.onload = () => {
        img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    };
});
});


