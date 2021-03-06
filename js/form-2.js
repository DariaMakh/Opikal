var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
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
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    var i = 0;
    document.getElementByClassName("list__new-eqpm").style.display = "none";
    //...the form gets submitted:
    document.getElementById("q-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
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

var mainContactLong = document.getElementById("form__button_contact-main");
var mainContactShort = document.getElementById("form__button_contact-more");

var length = 0;


var clicks = 0;

function fillPoll(id) {
  //ato de tsukuru
  var idPoll = document.getElementById(id);
  
  clicks += 1;

  idPoll.parentElement.parentElement.style.display = "none";
  var edits = document.getElementById('edit-poll__nav');
  edits.style.display = "block";

  var editsItem = document.getElementById(clicks);
  editsItem.style.display = "block";

}
