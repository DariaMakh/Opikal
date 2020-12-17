var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Продолжить";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("place-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

/**********************Category**************************/

const selectSingle = document.querySelector('.__select__category');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
const selectSingle_arrow = selectSingle_title.querySelector('.__select__arrow');
const textChosen = selectSingle.querySelector('.textChosen'); 
const placeAlert = document.querySelector('.place__alert');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    selectSingle_arrow.classList.add("act");

  } else {
    selectSingle.setAttribute('data-state', 'active');
    selectSingle_arrow.classList.remove("act");
  }
  if (textChosen.textContent === selectSingle_title.getAttribute('data-default')) {
      textChosen.classList.remove("act");
    }

});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {

    textChosen.textContent = evt.target.textContent;
    textChosen.classList.add("act");
    selectSingle_title.setAttribute('data-description', i);
    selectSingle.setAttribute('data-state', '');
    selectSingle_arrow.classList.add("act");

    if ('' != selectSingle_title.getAttribute('data-description')) {
      placeAlert.classList.add("act");
    }
  });
}


/**********************Equipment**************************/

const selectEquip = document.querySelector('.__select__equipment');
const selectEquip_title = selectEquip.querySelector('.__select__title');
const selectEquip_labels = selectEquip.querySelectorAll('.__select__label');
const selectEquip_arrow = selectEquip_title.querySelector('.__select__arrow');
const textChosenEquip = selectEquip.querySelector('.textChosen'); 
// Toggle menu
selectEquip_title.addEventListener('click', () => {
  if ('active' === selectEquip.getAttribute('data-state')) {
    selectEquip.setAttribute('data-state', '');
    selectEquip_arrow.classList.add("act");

  } else {
    selectEquip.setAttribute('data-state', 'active');
    selectEquip_arrow.classList.remove("act");
  }
  if (textChosenEquip.textContent === selectEquip_title.getAttribute('data-default')) {
    textChosenEquip.classList.remove("act");
    }
  

});

// Close when click to option
for (let i = 0; i < selectEquip_labels.length; i++) {
  selectEquip_labels[i].addEventListener('click', (evt) => {

    textChosenEquip.textContent = evt.target.textContent;
    textChosenEquip.classList.add("act");
    selectEquip_title.setAttribute('data-description', i);
    selectEquip.setAttribute('data-state', '');
    selectEquip_arrow.classList.add("act");

  });
}