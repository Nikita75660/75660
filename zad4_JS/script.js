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
