
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        loadAbout(data.about);
        loadEducation(data.education);
        loadSkills(data.skills);
        loadProjects(data.projects);
        loadExperience(data.experience);
    })
    .catch(err => console.error("Błąd JSON:", err));


function loadAbout(text) {
    document.getElementById("about").textContent = text;
}

function loadEducation(text) {
    document.getElementById("education-text").textContent = text;
}

function loadSkills(skills) {
    const ul = document.getElementById("skills-list");

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });
}

function loadProjects(projects) {
    const ul = document.getElementById("projects-list");

    projects.forEach(project => {
        const li = document.createElement("li");
        li.textContent = project;
        ul.appendChild(li);
    });
}

function loadExperience(exps) {
    const container = document.getElementById("experience-list");

    exps.forEach(exp => {
        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${exp.title}</h3>
            <p>${exp.year}</p>
            <p>${exp.desc}</p>
        `;

        container.appendChild(article);
    });
}


function toggle(id) {
    const el = document.getElementById(id);

    if (el.style.display === "none" || el.style.display === "") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

let isGreen = true;

function changeTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');

    link.href = isGreen ? "red.css" : "green.css";
    isGreen = !isGreen;
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
