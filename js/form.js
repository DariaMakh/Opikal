// Всплывающее окно, напоминание о сохранении в черновиках
function popup() {
  document.getElementById("place__alert__popup").style.display = "block";
}
setInterval(popup, 1000*60*15);

var PlacePopupOff = document.getElementById("place__alert__popup-close");

PlacePopupOff.addEventListener("click", () => {
  PlacePopupOff.parentElement.style.display = "none";
})



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
  if (n == 3) {
    document.getElementById("place-form__butto_main").style.display = "none";
  } else {
    document.getElementById("place-form__butto_main").style.display = "inline";
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

var tab4 = document.getElementById("tab4");

var mainContactLong = document.getElementById("form__button_contact-main");
var mainContactShort = document.getElementById("form__button_contact-more");

var length = 0;
function addContactInfo(n, button_id) {
  if(n == 1){

    current = length + 1;

    var contactsDop = $( "#place__contacts_dop" ).clone();
    contactsDop.prop("id", "place__contacts_dop" + current);
    contactsDop.find('#delContact').prop("id", "delContact" + current);
    contactsDop.find('.title_change').text('Контактное лицо ' + current);
    contactsDop.appendTo( "#tab4" );

    if (length == 0) {
      mainContactLong.classList.add('hide');
      mainContactLong.classList.remove('show');
      mainContactShort.classList.remove('hide');
      mainContactShort.classList.add('show');
    }

    length++;
  } else {
    $( '#' + button_id ).parent().parent().parent().remove();
    length--;
    if (length == 0) {
      mainContactLong.classList.remove('hide');
      mainContactLong.classList.add('show');
      mainContactShort.classList.add('hide');
      mainContactShort.classList.remove('show');
    }
  }
}

document.getElementById('openChat').onclick = function() {
  document.getElementById('place__chat').style.display = "block";
}

var PlaceChatOff = document.getElementById("place__chat-close");

PlaceChatOff.addEventListener("click", () => {
  PlaceChatOff.parentElement.style.display = "none";
})

function fillPoll(id) {
  //ato de tsukuru
 //var id = '"'+id+'"';

  //var idPoll = $('#' + id);// document.getElementById(id);
  var idPoll = document.getElementById(id);
  alert(typeof(id));

  //alert(idPoll);

  idPoll.parentElement.parentElement.style.display = "none";
  // $('#expert').parent().parent().hide();

}
var TechAsOn = document.getElementById("tech-as-on");
var TechAsOff = document.getElementById("tech-as-off");
var TechAsBtnOn = document.getElementById("TechAsBtnOn");
var TechAsBtnOff = document.getElementById("TechAsBtnOff");

TechAsBtnOn.addEventListener("click", () => {
  TechAsOn.style.display = "flex";
  TechAsOff.style.display = "none";
  TechAsBtnOn.parentElement.classList.add('act');
  TechAsBtnOff.parentElement.classList.remove('act');

})

TechAsBtnOff.addEventListener("click", () => {
  TechAsOn.style.display = "none";
  TechAsOff.style.display = "flex";
  TechAsBtnOn.parentElement.classList.remove('act');
  TechAsBtnOff.parentElement.classList.add('act');
})

/**********************Category**************************/

const selectCategory = document.querySelector('.__select__category');
const selectCategory_title = selectCategory.querySelector('.__select__title');
const selectCategory_labels = selectCategory.querySelectorAll('.__select__label');
const selectCategory_arrow = selectCategory_title.querySelector('.__select__arrow');
const textChosen = selectCategory.querySelector('.textChosen');
const placeAlert = document.querySelector('.tab1 .place_right');
const placeNotice = document.querySelector('.place__notice');

const selectEquip = document.querySelector('.__select__equipment');
const selectCheckbox = document.querySelector('.__select__checkbox');

// Toggle menu
selectCategory_title.addEventListener('click', () => {
  if ('active' === selectCategory.getAttribute('data-state')) {
    selectCategory.setAttribute('data-state', '');
    selectCategory_arrow.classList.add("act");

  } else {
    selectCategory.setAttribute('data-state', 'active');
    selectCategory_arrow.classList.remove("act");
  }
  if (textChosen.textContent === selectCategory_title.getAttribute('data-default')) {
      textChosen.classList.remove("act");
    }

});

// Close when click to option
for (let i = 0; i < selectCategory_labels.length; i++) {
  selectCategory_labels[i].addEventListener('click', (evt) => {

    textChosen.textContent = evt.target.textContent;
    textChosen.classList.add("act");
    textChosen.classList.remove("inact");
    selectCategory_title.setAttribute('data-description', i);
    selectCategory_title.classList.remove("invalid");
    placeNotice.classList.remove("act");
    selectCategory.setAttribute('data-state', '');
    selectCategory_arrow.classList.add("act");

    if (('' != selectCategory_title.getAttribute('data-description')) &&
        ('0' != selectCategory_title.getAttribute('data-description'))
        ) {
      placeAlert.classList.add("act");
      selectEquip.classList.add("act");
      selectCheckbox.classList.add("act");
    }
  });
}


/**********************Equipment**************************/

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
    textChosenEquip.classList.remove("inact");
    selectEquip_title.setAttribute('data-description', i);
    selectEquip.setAttribute('data-state', '');
    selectEquip_arrow.classList.add("act");

  });
}

/**********************Status**************************/

const selectStatus = document.querySelector('.__select__status');
const selectStatus_title = selectStatus.querySelector('.__select__title');
const selectStatus_labels = selectStatus.querySelectorAll('.__select__label');
const selectStatus_arrow = selectStatus_title.querySelector('.__select__arrow');
const textChosenStatus = selectStatus.querySelector('.textChosen'); 
const placeAttentionStatus = document.querySelector('.tab2 .place__attention');


// Toggle menu
selectStatus_title.addEventListener('click', () => {
  if ('active' === selectStatus.getAttribute('data-state')) {
    selectStatus.setAttribute('data-state', '');
    selectStatus_arrow.classList.add("act");

  } else {
    selectStatus.setAttribute('data-state', 'active');
    selectStatus_arrow.classList.remove("act");
  }
  if (textChosenStatus.textContent === selectStatus_title.getAttribute('data-default')) {
      textChosenStatus.classList.remove("act");
    }

});

// Close when click to option
for (let i = 0; i < selectStatus_labels.length; i++) {
  selectStatus_labels[i].addEventListener('click', (evt) => {

    textChosenStatus.textContent = evt.target.textContent;
    textChosenStatus.classList.add("act");
    textChosenStatus.classList.remove("inact");
    selectStatus_title.setAttribute('data-description', i);
    selectStatus_title.classList.remove("invalid");
    placeNotice.classList.remove("act");
    selectStatus.setAttribute('data-state', '');
    selectStatus_arrow.classList.add("act");

    if (('' === selectStatus_title.getAttribute('data-description')) || 
        ('0' === selectStatus_title.getAttribute('data-description'))
        ) {
            placeAttentionStatus.classList.remove("hide");
            placeAttentionStatus.classList.add("act");
          } else {
            placeAttentionStatus.classList.remove("act");
            placeAttentionStatus.classList.add("hide");
          }
  });
}

/**********************Aim**************************/

const selectAim = document.querySelector('.__select__aim');
const selectAim_title = selectAim.querySelector('.__select__title');
const selectAim_labels = selectAim.querySelectorAll('.__select__label');
const selectAim_arrow = selectAim_title.querySelector('.__select__arrow');
const textChosenAim = selectAim.querySelector('.textChosen'); 
const placeAlertAim = document.querySelector('.tab3 .place_right');
const placeAttentionAim = document.querySelector('.tab3 .place__attention');


// Toggle menu
selectAim_title.addEventListener('click', () => {
  if ('active' === selectAim.getAttribute('data-state')) {
    selectAim.setAttribute('data-state', '');
    selectAim_arrow.classList.add("act");

  } else {
    selectAim.setAttribute('data-state', 'active');
    selectAim_arrow.classList.remove("act");
  }
  if (textChosenAim.textContent === selectAim_title.getAttribute('data-default')) {
      textChosenAim.classList.remove("act");
    }

});

// Close when click to option
for (let i = 0; i < selectAim_labels.length; i++) {
  selectAim_labels[i].addEventListener('click', (evt) => {

    textChosenAim.textContent = evt.target.textContent;
    textChosenAim.classList.add("act");
    textChosenAim.classList.remove("inact");
    selectAim_title.setAttribute('data-description', i);
    selectAim_title.classList.remove("invalid");
    selectAim.setAttribute('data-state', '');
    selectAim_arrow.classList.add("act");

    if ('' === selectAim_title.getAttribute('data-description')) {
      placeAlertAim.classList.add("act");
    } else {
      placeAlertAim.classList.remove("act");
    }
  
    if (('' === selectAim_title.getAttribute('data-description')) || 
    ('0' === selectAim_title.getAttribute('data-description'))
    ) {
        placeAttentionAim.classList.remove("hide");
        placeAttentionAim.classList.add("act");
      } else {
        placeAttentionAim.classList.remove("act");
        placeAttentionAim.classList.add("hide");
      }
  });
}
/**********************Country**************************/

const selectCountry = document.querySelector('.country__select');
const selectCountry_title = selectCountry.querySelector('.__select__title');
const selectCountry_labels = selectCountry.querySelectorAll('.__select__label');
const selectCountry_arrow = selectCountry_title.querySelector('.__select__arrow');
const textChosenCountry = selectCountry.querySelector('.textChosen'); 
const inputCountry = document.querySelector('.country__input');


// Toggle menu
selectCountry_title.addEventListener('click', () => {
  if ('active' === selectCountry.getAttribute('data-state')) {
    selectCountry.setAttribute('data-state', '');
    selectCountry_arrow.classList.add("act");

  } else {
    selectCountry.setAttribute('data-state', 'active');
    selectCountry_arrow.classList.remove("act");
  }
  if (textChosenCountry.textContent === selectCountry_title.getAttribute('data-default')) {
      textChosenCountry.classList.remove("act");
    }

});

// Close when click to option
for (let i = 0; i < selectCountry_labels.length; i++) {
  selectCountry_labels[i].addEventListener('click', (evt) => {

    textChosenCountry.textContent = evt.target.textContent;
    textChosenCountry.classList.add("act");
    selectCountry_title.setAttribute('data-description', i);
    selectCountry_title.classList.remove("invalid");
    selectCountry.setAttribute('data-state', '');
    selectCountry_arrow.classList.add("act");

    if ('0' === selectCountry_title.getAttribute('data-description')) {
        inputCountry.classList.remove("hide");
        inputCountry.classList.add("act");
      } else {
        inputCountry.classList.remove("act");
        inputCountry.classList.add("hide");
      }
  
  });
}

/**********************Validate**************************/

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("required");
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
  if (textChosen.textContent === selectCategory_title.getAttribute('data-default')) {
    selectCategory_title.className += " invalid";
    placeNotice.className += " act";

    valid = false;
  }
  else if (textChosenStatus.textContent === selectStatus_title.getAttribute('data-default')) {
    // selectStatus_title.className += " invalid";
    // placeNotice.className += " act";
    // valid = false;
    // обязательно ли поле??
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
