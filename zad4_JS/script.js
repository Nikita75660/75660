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
    const section = document.getElementById("Umiejętności");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
function toggleDoświadczenie() {
    const section = document.getElementById("Doświadczenie");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
function toggleEdukacja() {
    const section = document.getElementById("Edukacja");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
