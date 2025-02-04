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