document.addEventListener("DOMContentLoaded", function () {
    // Find the current page
    const currentPage = window.location.pathname.split("/").pop();
    // Find all navigation links
    const navLinks = document.querySelectorAll(".nav-list a");
    // Highlight the current page in the navigation
    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
    // Add the current year to the console
    const currentYear = new Date().getFullYear();
    console.log("Ashley Simpson Portfolio");
    console.log("Current year: " + currentYear);
    console.log("Portfolio loaded successfully.");
});
