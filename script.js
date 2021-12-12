//Variables
const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//Open modal
function openModal(e) {
  //   Prevent default behavior (page refresh) when a button, inside a form, is clicked
  e.preventDefault();
  modal.style.display = "block";
}

//Close modal
function closeModal() {
  modal.style.display = "none";
}
