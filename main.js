let btnToggle = document.getElementById("btnToggle");
let mobileNavbar = document.getElementById("mobile-navbar");

if (btnToggle && mobileNavbar) {
    btnToggle.addEventListener("click", function () {
        const isExpanded = mobileNavbar.classList.toggle("active");
        btnToggle.setAttribute("aria-expanded", String(isExpanded));
    });
}