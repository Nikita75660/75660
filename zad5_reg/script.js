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
    document.getElementById("imieError").textContent = "Imię nie może zawierać cyfr";
    poprawne = false;
  }


  if (!nazwisko) {
    document.getElementById("nazwiskoError").textContent = "Podaj nazwisko";
    poprawne = false;
  } else if (!regexImie.test(nazwisko)) {
    document.getElementById("nazwiskoError").textContent = "Nazwisko nie może zawierać cyfr";
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
    alert("Formularz został poprawnie wypełniony!");
  }
});
