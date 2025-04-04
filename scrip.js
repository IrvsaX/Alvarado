document.addEventListener("DOMContentLoaded", function() {
    let submenu = document.querySelector(".submenu a"); 
    let submenuContent = document.querySelector(".submenu-content"); 

    submenu.addEventListener("click", function(event) {
        event.preventDefault(); 
        submenuContent.style.display = submenuContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!submenu.contains(event.target) && !submenuContent.contains(event.target)) {
            submenuContent.style.display = "none";
        }
    });
});