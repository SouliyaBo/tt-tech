const banner = document.querySelector("#banner");

banner.addEventListener("click", () => {
  //   resfresh page
  location.reload();
});

// Dragable Banklist
const bankContainer = document.querySelector(".bank-container");

for (let index = 10; index < 30; index++) {
  bankContainer.children[0].innerHTML += `
  <div id="item" class="item">
            <img
              alt="bank"
              src="/assets/icons/icon-bank-active/Ellipse ${index}.svg"
              style="width: 60px; height: auto; object-fit: cover"
            />
          </div>
  `;
}

let isDragging = false;
let startX, initialX;
const containerWidth = window.innerWidth; // Change this to your container's width if needed

bankContainer.children[0].addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = bankContainer.children[0].offsetLeft - e.clientX;
  startX = e.clientX;

  bankContainer.children[0].style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    e.preventDefault();

    let newX = e.clientX + initialX;

    // If dragged out of the left boundary, reappear from the right
    if (newX < -bankContainer.children[0].clientWidth) {
      newX = containerWidth;
    }

    bankContainer.children[0].style.left = newX + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  bankContainer.children[0].style.cursor = "grab";
});

// Mobile
const loginBtnMobile = document.querySelector("#loginBtn-mobile");

loginBtnMobile.addEventListener("click", () => {
  location.href = "./pages/login-page-mobile.html";
});

const resgisterBtnMobile = document.querySelector("#registerBtn-mobile");

resgisterBtnMobile.addEventListener("click", () => {
  location.href = "./pages/register-step1.html";
});

// Footer

const footerLoginBtn = document.querySelector("#footer-login-button");

footerLoginBtn.addEventListener("click", () => {
  const loginModal = document.querySelector(".login-modal");
  loginModal.setAttribute("style", "display: flex;");
  console.log(loginModal.childNodes);

  loginModal.childNodes[1].setAttribute(
    "style",
    "animation: scaleUp 0.5s ease-in-out;"
  );
});

const footerSignupBtn = document.querySelector("#footer-signup-button");
const stepItemOne = document.getElementById("step-item1");
const stepItemTwo = document.getElementById("step-item2");
// const stepItemThree = document.getElementById("step-item3");

const formStepOne = document.getElementById("form-step-one");
const formStepTwo = document.getElementById("form-step-two");
// const formStepThree = document.getElementById("form-step-three");
formStepOne.style.display = "block";
formStepTwo.style.display = "none";
// formStepThree.style.display = "none";

const goToStepTwo = document.getElementById("goto-step2");
// const goToStepThree = document.getElementById("goto-step3");

footerSignupBtn.addEventListener("click", function () {
  stepItemOne.classList.add("active");
  stepItemTwo.classList.remove("active");
  stepItemThree.classList.remove("active");

  formStepOne.style.display = "block";
  formStepTwo.style.display = "none";
  formStepThree.style.display = "none";
});
goToStepTwo.addEventListener("click", function () {
  stepItemOne.classList.remove("active");
  stepItemTwo.classList.add("active");

  formStepOne.style.display = "none";
  formStepTwo.style.display = "block";
  formStepThree.style.display = "none";
});
goToStepThree.addEventListener("click", function () {
  stepItemTwo.classList.remove("active");
  stepItemThree.classList.add("active");

  formStepOne.style.display = "none";
  formStepTwo.style.display = "none";
  formStepThree.style.display = "block";
});

const loginBtn = document.querySelector("#goToLoginBtn");

loginBtn.addEventListener("click", () => {
  const loginModal = document.querySelector(".login-modal");

  setTimeout(() => {
    loginModal.setAttribute("style", "display: flex;");

    loginModal.childNodes[1].setAttribute(
      "style",
      "animation: scaleUp 0.5s ease-in-out;"
    );
  }, 400);
});

// Bo Code
var langArray = [];
$(".vodiapicker option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item =
    '<li><img src="' +
    img +
    '" alt="" value="' +
    value +
    '"/><span>' +
    text +
    "</span></li>";
  langArray.push(item);
});

$("#a").html(langArray);

//Set the button value to the first el of the array
$(".btn-select").html(langArray[0]);
$(".btn-select").attr("value", "en");

//change button stuff on click
$("#a li").click(function () {
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;
  var item =
    '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  $(".btn-select").html(item);
  $(".btn-select").attr("value", value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function () {
  $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem("lang");
if (sessionLang) {
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $(".btn-select").html(langArray[langIndex]);
  $(".btn-select").attr("value", sessionLang);
} else {
  var langIndex = langArray.indexOf("ch");
  console.log(langIndex);
  $(".btn-select").html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}




var langArray1 = [];
$(".vodiapicker1 option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item =
    '<li><img src="' +
    img +
    '" alt="" value="' +
    value +
    '"/><span>' +
    text +
    "</span></li>";
  langArray1.push(item);
});

$("#a1").html(langArray1);

//Set the button value to the first el of the array
$(".btn-select1").html(langArray1[0]);
$(".btn-select1").attr("value", "en");

//change button stuff on click
$("#a1 li").click(function () {
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;
  var item =
    '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  $(".btn-select1").html(item);
  $(".btn-select1").attr("value", value);
  $(".b1").toggle();
  //console.log(value);
});

$(".btn-select1").click(function () {
  $(".b1").toggle();
});

//check local storage for the lang
var sessionLang1 = localStorage.getItem("lang");
if (sessionLang1) {
  //find an item with value of sessionLang
  var langIndex1 = langArray1.indexOf(sessionLang1);
  $(".btn-select1").html(langArray1[langIndex1]);
  $(".btn-select1").attr("value", sessionLang1);
} else {
  var langIndex1 = langArray1.indexOf("ch");
  console.log(langIndex1);
  $(".btn-select1").html(langArray1[langIndex1]);
  //$('.btn-select').attr('value', 'en');
}