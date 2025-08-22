// Mobile navigation functionality with error handling
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navclick4 = document.querySelector(".link4");
    const navclick5 = document.querySelector(".link5");

    // Check if elements exist before adding event listeners
    if (navToggle && nav) {
        navToggle.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const visibility = nav.getAttribute("data-visible");
            const isVisible = visibility === "true";
            
            // Toggle navigation visibility
            nav.setAttribute("data-visible", !isVisible);
            navToggle.setAttribute("aria-expanded", !isVisible);
            
            console.log('Mobile nav toggled:', !isVisible); // Debug log
        });
    } else {
        console.error('Mobile navigation elements not found');
    }

    // Close navigation when clicking on navigation links
    if (navclick4) {
        navclick4.addEventListener("click", function() {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        });
    }
    
    if (navclick5) {
        navclick5.addEventListener("click", function() {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        });
    }
    
    // Close navigation when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && navToggle && 
            !nav.contains(e.target) && 
            !navToggle.contains(e.target) && 
            nav.getAttribute("data-visible") === "true") {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
    
    // Close navigation on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav && nav.getAttribute("data-visible") === "true") {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
});
