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
    const user = {
        isLoggedIn: false, // Hier echte überprüfung einfügen
        username: "Username",
        profileImage: "profile_picures/profile.jpg"
    };

    const accountMenu = document.getElementById("account-menu");

    if (user.isLoggedIn) {
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

        document.getElementById("logout").addEventListener("click", function () {
            // Hier Logout-Logik einfügen
        });

    } else {
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