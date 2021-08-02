const contactbtn = document.querySelector("#contactbtn");
const contact = document.querySelector(".contact");
const conClose = document.querySelector("#conClose");

contactbtn.addEventListener("click", () => {
  contact.classList.toggle("active");
});
conClose.addEventListener("click", () => {
  contact.classList.toggle("active");
});
