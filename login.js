function toggleForms() {
    document.getElementById("login").classList.toggle("hidden");
    document.getElementById("register").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    // Wenn das Login-Formular abgeschickt wird
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindern, dass das Formular gesendet wird

        // Benutzereingaben holen
        const email = document.getElementById("mail").value;
        const password = document.getElementById("pwd").value;

        // Hier könnte eine API-Abfrage zum Überprüfen der Benutzerdaten gemacht werden
        // Hier verwenden wir für das Beispiel eine einfache Validierung
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Überprüfen, ob der Benutzer mit der angegebenen E-Mail existiert
        const user = users.find(u => u.email === email);

        if (user && user.password === password) {
            // Wenn der Benutzer existiert und das Passwort korrekt ist, speichern wir die Benutzerdaten
            localStorage.setItem("user", JSON.stringify({
                isLoggedIn: true,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage || "profile_picures/default.jpg"
            }));

            // Weiterleitung nach erfolgreichem Login
            window.location.href = "index.html"; // Hier kann die Seite geändert werden
        } else {
            alert("Ungültige Anmeldedaten!");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Wenn das Registrierungsformular abgeschickt wird
    document.getElementById("register-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindern, dass das Formular gesendet wird

        // Benutzereingaben holen
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const email = document.getElementById("mail").value;
        const password = document.getElementById("pwd").value;

        // Überprüfen, ob der Benutzer bereits existiert
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Überprüfen, ob die E-Mail bereits registriert ist
        const userExists = users.some(user => user.email === email);
        
        if (userExists) {
            alert("Diese E-Mail ist bereits registriert.");
            return;
        }

        // Neuen Benutzer erstellen
        const newUser = {
            firstName,
            lastName,
            email,
            password, // Hinweis: In einer echten Anwendung sollte das Passwort verschlüsselt gespeichert werden
            profileImage: "profile_picures/default.jpg" // Standardbild
        };

        // Benutzer zum localStorage hinzufügen
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Weiterleitung zur Login-Seite oder zur Startseite
        window.location.href = "login.html"; // Weiterleitung zur Login-Seite
    });

    // Funktion zum Umschalten zwischen Login und Registrierung
    window.toggleForms = function () {
        const loginForm = document.getElementById("login");
        const registerForm = document.getElementById("register");
        
        if (loginForm.classList.contains("hidden")) {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
        } else {
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
        }
    };
});
