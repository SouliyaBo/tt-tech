const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", () => {
  const loginModal = document.querySelector(".login-modal");
  loginModal.setAttribute("style", "display: flex;");
  console.log(loginModal.childNodes);

  loginModal.childNodes[1].setAttribute(
    "style",
    "animation: scaleUp 0.5s ease-in-out;"
  );
});

const loginModal = document.querySelector(".login-modal");

loginModal.childNodes[3].addEventListener("click", () => {
  loginModal.childNodes[1].setAttribute(
    "style",
    "animation: scaleDown 0.5s ease-in-out;"
  );
  setTimeout(() => {
    loginModal.setAttribute("style", "display: none;");
  }, 400);
});

const loginModalCloseBtn = document.querySelector("#login-modal-close-btn");
loginModalCloseBtn.addEventListener("click", () => {
  loginModal.childNodes[1].setAttribute(
    "style",
    "animation: scaleDown 0.5s ease-in-out;"
  );
  setTimeout(() => {
    loginModal.setAttribute("style", "display: none;");
  }, 400);
});

const loginButton = document.querySelector("#login-btn");
loginButton.addEventListener("click", () => {
  window.location.href = "/after-login.html";
});
