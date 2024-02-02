/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


const responsiveMenuButton = document.querySelector("#menuOpen");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".closeMenu");

responsiveMenuButton.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("activeMenu");
});

// Revealing sections
const sections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach((element) => {
  sectionObserver.observe(element);
  element.classList.add("section--hidden");
});

// Form validation
// Forms
const nome = document.getElementById("nome");
const celular = document.getElementById("celular");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let inputsAreValid = validateInputs();

  if (!inputsAreValid) {
    e.preventDefault();
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateTel = (telephoneNumber) => {
  let regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/;
  return regex.test(telephoneNumber);
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const validateInputs = () => {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const celularValue = celular.value.trim();
  const message = mensagem.value.trim();
  let okay = true;

  if (nomeValue === "") {
    setError(nome, "Forneça um nome");
    okay = false;
  } else {
    setSuccess(nome);
  }

  if (emailValue === "") {
    setError(email, "O email é um campo obrigatorio");
    okay = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Forneça um e-mail válido");
    okay = false;
  } else {
    setSuccess(email);
  }

  if (celularValue !== "") {
    if (celularValue.length < 8 || !validateTel(celularValue)) {
      setError(
        celular,
        "Algo deu errado, verifique o numero digitado e tente novamente."
      );
      okay = false;
    } else {
      setSuccess(celular);
    }
  }

  if (message === "") {
    setError(
      mensagem,
      "Algo deu errado, verifique o conteudo da mensagem e tente novamente."
    );
    okay = false;
  } else {
    setSuccess(mensagem);
  }
  return okay;
};

// Scrolling to

const scrollingTo = function (section) {
  const sectionCoords = section.getBoundingClientRect();
  window.scrollTo({
    left: sectionCoords.left + window.scrollX,
    top: sectionCoords.top + window.scrollY - 200,
    behavior: "smooth",
  });
  menu.classList.remove("activeMenu");
};

const menuButtons = document.querySelectorAll(".menuButton");
console.log(menuButtons);

menuButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText === "Home")
      scrollingTo(document.querySelector(".devProf"));

    if (element.innerText === "Serviços")
      scrollingTo(document.querySelector(".services "));

    if (element.innerText === "Sobre mim")
      scrollingTo(document.querySelector(".aboutMe"));

    if (element.innerText === "Portifolio")
      scrollingTo(document.querySelector(".portifolio "));

    if (element.innerText === "Contato")
      scrollingTo(document.querySelector(".contactSession"));
  });
});

document.querySelector(".devProf--content").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    if (e.target.innerText === "Contato") {
      scrollingTo(document.querySelector(".contactSession"));
    }
    if (e.target.innerText === "Saiba mais") {
      scrollingTo(document.querySelector(".aboutMe"));
    }
  }
  return;
});

/******/ })()
;