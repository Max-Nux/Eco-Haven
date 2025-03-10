function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("toggle-sidebar");
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

document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user")) || {
        isLoggedIn: false,
        username: "Jamal Brown",
        profileImage: "images/profile_picures/brown.jpg"
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
            localStorage.removeItem("user");
            window.location.href = "/login/login.html";
        });

    } else {
        accountMenu.innerHTML = `
            <div class="menu-account">
                <a href="/login/login.html" class="menu-account-link">
                    <img src="images/profile_picures/default.jpg" class="profile-img" />
                    <span class="username-text">Anmelden</span>
                </a>
            </div>
        `;
    }
});