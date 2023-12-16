// Function to show the modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // modal.style.display = "block";
      modal.style.display = "flex";
      modal.classList.remove("hide"); 
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.add("hide");
          setTimeout(() => {
              modal.style.display = "none";
          }, 400); // The timeout should match the animation-duration
      }
    }
  }
  
  // Function to close the modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hide");
      setTimeout(() => {
          modal.style.display = "none";
      }, 400);
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.add("hide");
          setTimeout(() => {
              modal.style.display = "none";
          }, 400); // The timeout should match the animation-duration
      }
    }
  }
  
  // Event listeners for buttons to open modals
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-bs-target').substring(1); // Remove '#' from ID
        showModal(modalId);
    });
  });
  
  // Event listeners for buttons to close modals
  document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal.id);
    });
  });


// history modal
const historyTitleDeposit = document.getElementById('history-title-deposit');
const historyTitleWithdraw = document.getElementById('history-title-withdraw');
const historyTitleBonus = document.getElementById('history-title-bonus');
historyTitleDeposit.style.display = 'block';
historyTitleWithdraw.style.display = 'none';
historyTitleBonus.style.display = 'none';

const tabDeposit = document.getElementById('tab-deposit');
const tabWithdraw = document.getElementById('tab-withdraw');
const tabBonus = document.getElementById('tab-bonus');
tabDeposit.classList.add('active');
tabWithdraw.classList.remove('active');
tabBonus.classList.remove('active');

const historyContentDeposit = document.getElementById('history-content-deposit');
const historyContentWithdraw = document.getElementById('history-content-withdraw');
const historyContentBonus = document.getElementById('history-content-bonus');
historyContentDeposit.style.display = 'block';
historyContentWithdraw.style.display = 'none';
historyContentBonus.style.display = 'none';

tabDeposit.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'block';
  historyTitleWithdraw.style.display = 'none';
  historyTitleBonus.style.display = 'none';
  
  tabDeposit.classList.add('active');
  tabWithdraw.classList.remove('active');
  tabBonus.classList.remove('active');
  
  historyContentDeposit.style.display = 'block';
  historyContentWithdraw.style.display = 'none';
  historyContentBonus.style.display = 'none';
})

tabWithdraw.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'none';
  historyTitleWithdraw.style.display = 'block';
  historyTitleBonus.style.display = 'none';
  
  tabDeposit.classList.remove('active');
  tabWithdraw.classList.add('active');
  tabBonus.classList.remove('active');
  
  historyContentDeposit.style.display = 'none';
  historyContentWithdraw.style.display = 'block';
  historyContentBonus.style.display = 'none';
})

tabBonus.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'none';
  historyTitleWithdraw.style.display = 'none';
  historyTitleBonus.style.display = 'block';
  
  tabDeposit.classList.remove('active');
  tabWithdraw.classList.remove('active');
  tabBonus.classList.add('active');
  
  historyContentDeposit.style.display = 'none';
  historyContentWithdraw.style.display = 'none';
  historyContentBonus.style.display = 'block';
})
// history modal end

// top rank select
const topRankSelect = document.getElementById('top-rank-select');
const iconTopPlay = document.getElementById('icon-top-play');
const iconTopRecharge = document.getElementById('icon-top-recharge');
const iconTopLose = document.getElementById('icon-top-lose');
iconTopPlay.style.display = 'block';
iconTopRecharge.style.display = 'none';
iconTopLose.style.display = 'none';

topRankSelect.addEventListener('change', function() {
  console.log('Selected value:', this.value);

  if (this.value == 'top-play') {
    iconTopPlay.style.display = 'block';
    iconTopRecharge.style.display = 'none';
    iconTopLose.style.display = 'none';
  }
  if (this.value == 'top-recharge') {
    iconTopPlay.style.display = 'none';
    iconTopRecharge.style.display = 'block';
    iconTopLose.style.display = 'none';
  }
  if (this.value == 'top-lose') {
    iconTopPlay.style.display = 'none';
    iconTopRecharge.style.display = 'none';
    iconTopLose.style.display = 'block';
  }
});


// earn money modal
const earnTabOverview = document.getElementById('earn-tab-overview')
const earnTabIncome = document.getElementById('earn-tab-income')
const earnTabWithdraw = document.getElementById('earn-tab-withdraw-income')
earnTabOverview.classList.add('active');
earnTabIncome.classList.remove('active');
earnTabWithdraw.classList.remove('active');

const earnDetailOverview = document.getElementById('earn-detail-overview')
const earnDetailIncome = document.getElementById('earn-detail-income')
const earnDetailWithdraw = document.getElementById('earn-detail-withdraw-income')
earnDetailOverview.style.display = 'flex';
earnDetailIncome.style.display = 'none';
earnDetailWithdraw.style.display = 'none';

earnTabOverview.addEventListener('click', function () {
  earnTabOverview.classList.add('active');
  earnTabIncome.classList.remove('active');
  earnTabWithdraw.classList.remove('active');

  earnDetailOverview.style.display = 'flex';
  earnDetailIncome.style.display = 'none';
  earnDetailWithdraw.style.display = 'none';
})

earnTabIncome.addEventListener('click', function () {
  earnTabOverview.classList.remove('active');
  earnTabIncome.classList.add('active');
  earnTabWithdraw.classList.remove('active');

  earnDetailOverview.style.display = 'none';
  earnDetailIncome.style.display = 'flex';
  earnDetailWithdraw.style.display = 'none';
})

earnTabWithdraw.addEventListener('click', function () {
  earnTabOverview.classList.remove('active');
  earnTabIncome.classList.remove('active');
  earnTabWithdraw.classList.add('active');

  earnDetailOverview.style.display = 'none';
  earnDetailIncome.style.display = 'none';
  earnDetailWithdraw.style.display = 'flex';
})


// document.addEventListener("DOMContentLoaded", function () {
// });
const customDropdown = document.getElementById("custom-dropdown");
const selectedItem = document.getElementById("selected-item");
const dropdownList = document.getElementById("dropdown-list");
const dropdownItem = document.querySelectorAll(".dropdown-item-img")

// Toggle the dropdown list visibility
customDropdown.addEventListener("click", function () {
  customDropdown.classList.toggle("active");
});

function selectImage(imageSrc) {
  // Create a new image element
  const newImage = document.createElement("img");
  newImage.src = imageSrc;

  while (selectedItem.firstChild) {
    selectedItem.removeChild(selectedItem.firstChild);
  }
  selectedItem.appendChild(newImage);

  dropdownList.classList.remove("active");
}

dropdownItem.forEach(function (option) {
  option.addEventListener("click", function () {
    const imageSrc = option.src;
    selectImage(imageSrc);
  });
});