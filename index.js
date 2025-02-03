function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const consentBanner = document.getElementById("simple-cookie-consent");
    const allowButton = document.querySelector(".cookie-consent-allow");
    const denyButton = document.querySelector(".cookie-consent-deny");

    if (localStorage.getItem("cookieConsent") !== null) {
        consentBanner.style.display = "none";
    }

    allowButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "true");
        enableCookies();
        consentBanner.style.display = "none";
    });

    denyButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "false");
        disableCookies();
        consentBanner.style.display = "none";
    });

    function enableCookies() {
        console.log("Alle Cookies erlaubt");
    }

    function disableCookies() {
        console.log("Nur notwendige Cookies erlaubt");
    }
});

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-sidebar");
}