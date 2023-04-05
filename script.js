var navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
// Select all page content
const homeContent = document.getElementById("home");
const aboutContent = document.getElementById("about");
const servicesContent = document.getElementById("services");
const contactContent = document.getElementById("contact");
// when click a contact button then contact page open
const contactbtn = document.getElementById("contactbtn");
contactbtn.addEventListener("click", () => {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  contactContent.style.display = "block";
  contactContent.style.color = "red";
  contactContent.style.fontSize = "1.2rem";
});
// when click a Home button then Home page open
const homebtn = document.getElementById("homebtn");
// console.table(homebtn);
homebtn.addEventListener("click", () => {
  homeContent.style.display = "flex";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  contactContent.style.display = "none";
});

// when click a About button then About page open
const aboutbtn = document.getElementById("aboutbtn");
aboutbtn.addEventListener("click", () => {
  homeContent.style.display = "none";
  aboutContent.style.display = "block";
  aboutContent.style.fontSize = "1.2rem";
  aboutContent.style.backgroundColor = "skyblue";
  servicesContent.style.display = "none";
  contactContent.style.display = "none";
});
// when click a services button then services page open
const servicesbtn = document.getElementById("servicesbtn");
servicesbtn.addEventListener("click", () => {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "block";
  servicesContent.style.color = "blue";
  servicesContent.style.fontSize = "1.2rem";
  contactContent.style.display = "none";
});
