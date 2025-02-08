document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("mobile-menu");
//     const navLinks = document.getElementById("nav-links");
//     const carousel = document.getElementById("carousel");
//     const prevBtn = document.getElementById("prev");
//     const nextBtn = document.getElementById("next");
//     let index = 0;

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });

//     nextBtn.addEventListener("click", function () {
//         index = (index + 1) % 3;
//         carousel.style.transform = `translateX(-${index * 100}%)`;
//     });

//     prevBtn.addEventListener("click", function () {
//         index = (index - 1 + 3) % 3;
//         carousel.style.transform = `translateX(-${index * 100}%)`;
//     });
// });
