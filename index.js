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

document.addEventListener("DOMContentLoaded", function () {
    // Überprüfen, ob der Benutzer eingeloggt ist, indem die Daten aus localStorage gelesen werden
    const user = JSON.parse(localStorage.getItem("user")) || {
        isLoggedIn: false,
        username: "",
        profileImage: "profile_picures/default.jpg"
    };

    const accountMenu = document.getElementById("account-menu");

    if (user.isLoggedIn) {
        // Wenn der Benutzer eingeloggt ist, zeige das Profil-Menü an
        accountMenu.innerHTML = `
            <div class="menu-account">
                <a href="settings.html" class="menu-account-link">
                    <img src="${user.profileImage}" class="profile-img" />
                    <span class="username-text">${user.username}</span>
                </a>
                <a href="#" id="logout" class="logout-link">
                    <i class="fa-solid fa-sign-out-alt"></i>
                </a>
            </div>
        `;

        // Logout-Button EventListener hinzufügen
        document.getElementById("logout").addEventListener("click", function () {
            // Logout-Logik: Benutzerdaten aus localStorage entfernen
            localStorage.removeItem("user");

            // Weiterleitung zur Startseite oder Login-Seite
            window.location.href = "login.html"; // Weiterleitung zur Login-Seite
        });

    } else {
        // Wenn der Benutzer nicht eingeloggt ist, zeige den Anmelden-Link an
        accountMenu.innerHTML = `
            <div class="menu-account">
                <a href="login.html" class="menu-account-link">
                    <img src="profile_picures/default.jpg" class="profile-img" />
                    <span class="username-text">Anmelden</span>
                </a>
            </div>
        `;
    }
});