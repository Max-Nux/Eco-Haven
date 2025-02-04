function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function toggleForms() {
    document.getElementById("login").classList.toggle("hidden");
    document.getElementById("register").classList.toggle("hidden");
}