document.addEventListener("DOMContentLoaded", function () {
    const submenu = document.querySelector(".submenu > a");
    const submenuContent = document.querySelector(".submenu-content");

    submenu.addEventListener("click", function (e) {
        e.preventDefault();
        submenuContent.style.display = submenuContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!submenu.contains(e.target) && !submenuContent.contains(e.target)) {
            submenuContent.style.display = "none";
        }
    });
});
