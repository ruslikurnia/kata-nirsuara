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
