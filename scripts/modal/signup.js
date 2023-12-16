const signUpBtn = document.getElementById('singup-btn');

const stepItemOne = document.getElementById('step-item1');
const stepItemTwo = document.getElementById('step-item2');
// const stepItemThree = document.getElementById('step-item3');

const formStepOne = document.getElementById('form-step-one');
const formStepTwo = document.getElementById('form-step-two');
// const formStepThree = document.getElementById('form-step-three');
formStepOne.style.display = 'block';
formStepTwo.style.display = 'none';
// formStepThree.style.display = 'none';

const goToStepTwo = document.getElementById('goto-step2');
const goToStepThree = document.getElementById('goto-step3');

signUpBtn.addEventListener('click', function () {
    stepItemOne.classList.add('active');
    stepItemTwo.classList.remove('active');
    // stepItemThree.classList.remove('active');

    formStepOne.style.display = 'block';
    formStepTwo.style.display = 'none';
    // formStepThree.style.display = 'none';
})
goToStepTwo.addEventListener('click', function () {
    stepItemOne.classList.remove('active');
    stepItemTwo.classList.add('active');

    formStepOne.style.display = 'none';
    formStepTwo.style.display = 'block';
    // formStepThree.style.display = 'none';
})
goToStepThree.addEventListener('click', function () {
    // stepItemTwo.classList.remove('active');
    // stepItemThree.classList.add('active');

    formStepOne.style.display = 'none';
    // formStepTwo.style.display = 'none';
    // formStepThree.style.display = 'block';
})

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