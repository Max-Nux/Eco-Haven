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
      isLoggedIn: true,
      username: "Username",
      profileImage: "profile_pictures/profile.jpg"
    };

    const accountMenu = document.getElementById("account-menu");

    if (user.isLoggedIn) {
      accountMenu.innerHTML = `
        <a href="settings.html" class="menu-link">
          <img src="${user.profileImage}" class="profile-img" />
          <span>${user.username}</span>
        </a>
        <a href="#" id="logout" class="logout-icon" title="Ausloggen">
          <i class="fa-solid fa-sign-out-alt"></i>
        </a>
      `;

      document.getElementById("logout").addEventListener("click", function () {
        alert("Ausgeloggt!");
        // Hier Logout-Logik einfügen
      });
    } else {
      accountMenu.innerHTML = `
        <a href="login.html" class="menu-link">
          <img src="profile_picures/default.jpg" class="profile-img" />
          <span>Einloggen</span>
        </a>
      `;
    }
  });