const openModal = document.querySelectorAll(".card");

openModal.forEach((btn) => {
  btn.onclick = (e) => {
    var modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  };
});

const closeModal = document.querySelectorAll(".close");

closeModal.forEach((btn) => {
  btn.onclick = (e) => {
    var modalId = (btn.closest(".modal").style.display = "none");
    e.preventDefault();
  };
});

window.onclick = (e) => {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector("#dark-mode");
darkModeToggle.addEventListener("click", (e) => {
  document.documentElement.classList.toggle("dark-mode");
  e.preventDefault();
  if (document.documentElement.classList.contains("dark-mode")) {
    darkModeToggle.querySelector("box-icon").setAttribute("name", "sun");
  } else {
    darkModeToggle.querySelector("box-icon").setAttribute("name", "moon");
  }
});
