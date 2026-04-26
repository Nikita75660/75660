let isGreen = true;

function changeTheme() {
    const link = document.querySelector("link");

    if (isGreen) {
        link.href = "red.css";
    } else {
        link.href = "green.css";
    }

    isGreen = !isGreen;
}

function toggleProjects() {
    const section = document.getElementById("projects");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
function toggleUmiejętności() {
    const section = document.getElementById("skills");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
function toggleDoświadczenie() {
    const section = document.getElementById("experience");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
function toggleEdukacja() {
    const section = document.getElementById("education");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
document.getElementById("formularz").addEventListener("submit", function(e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let poprawne = true;

    const imie = document.getElementById("imie").value.trim();
    const nazwisko = document.getElementById("nazwisko").value.trim();
    const email = document.getElementById("email").value.trim();
    const wiadomosc = document.getElementById("wiadomosc").value.trim();

    const regexImie = /^[A-Za-zÀ-ž]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!imie) {
        document.getElementById("imieError").textContent = "Podaj imię";
        poprawne = false;
    } else if (!regexImie.test(imie)) {
        document.getElementById("imieError").textContent = "Imię może zawierać tylko litery";
        poprawne = false;
    }

    if (!nazwisko) {
        document.getElementById("nazwiskoError").textContent = "Podaj nazwisko";
        poprawne = false;
    } else if (!regexImie.test(nazwisko)) {
        document.getElementById("nazwiskoError").textContent = "Nazwisko może zawierać tylko litery";
        poprawne = false;
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Podaj email";
        poprawne = false;
    } else if (!regexEmail.test(email)) {
        document.getElementById("emailError").textContent = "Niepoprawny email";
        poprawne = false;
    }

    if (!wiadomosc) {
        document.getElementById("wiadomoscError").textContent = "Podaj wiadomość";
        poprawne = false;
    }

    if (poprawne) {
        alert("Wiadomość została wysłana (frontend)");
    }
});
