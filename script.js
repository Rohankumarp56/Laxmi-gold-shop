'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

<script>
function openForm() {
  document.getElementById("enquiryForm").style.display = "block";
}

function closeForm() {
  document.getElementById("enquiryForm").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;

  if (name === "" || mobile === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Enquiry Submitted Successfully!");

  closeForm();
}
</script>

/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});