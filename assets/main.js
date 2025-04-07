// document.addEventListener("DOMContentLoaded", function () {
//     const imageWrapper = document.querySelector(".image-wrapper");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     imageWrapper.classList.add("active"); // Animate when in view
//                 } else {
//                     imageWrapper.classList.remove("active"); // Reset when out of view
//                 }
//             });
//         },
//         { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     observer.observe(imageWrapper);
// });



// Aos
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration (in milliseconds)
        once: false, // Allows animation to occur multiple times
        mirror: true, // Enables reverse animation when scrolling up
        offset: 100 // Offset before animation starts
    });
});

// back to top
window.addEventListener("scroll", function () {
    var backToTop = document.getElementById("backToTop");
    if (window.scrollY > 3500) {
        backToTop.classList.add("show-back-to-top");
    } else {
        backToTop.classList.remove("show-back-to-top");
    }
});

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});





