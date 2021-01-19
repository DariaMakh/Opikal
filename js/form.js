// Всплывающее окно, напоминание о сохранении в черновиках
function popup_alert() {
  document.getElementById("place__alert__popup").style.display = "block";
}
setInterval(popup_alert, 1000*60*15);

var PlacePopupOff = document.getElementById("place__alert__popup-close");

PlacePopupOff.addEventListener("click", () => {
  PlacePopupOff.parentElement.style.display = "none";
})

$(".adv__close").click(function(){
  $(this).parent().hide();
});

function popup_message_show(){
  $("#place__message__popup").show();
}
function popup_message_hide(){
  $("#place__message__popup").hide();
  $('#place-form').submit(); //fixit
  window.location.href = "customer-drafts.html";

}
function popup_save_template() {
  //save
  $("#btn-save").hide();
  $("#saved").show();

  
}

var ChooseTaskOption = document.getElementById("chooseTaskOption");
var TechAsOn = document.getElementById("tech-as-on");
var TechAsOff = document.getElementById("tech-as-off");
var TechAsBtnOn = document.getElementById("TechAsBtnOn");
var TechAsBtnOff = document.getElementById("TechAsBtnOff");
var NoticePoll = document.getElementById("notice__poll");


TechAsBtnOn.addEventListener("click", () => {
  TechAsOn.style.display = "flex";
  TechAsOff.style.display = "none";
  TechAsBtnOn.parentElement.classList.add('act');
  TechAsBtnOff.parentElement.classList.remove('act');
  NoticePoll.style.display = "block";

})

TechAsBtnOff.addEventListener("click", () => {
  TechAsOn.style.display = "none";
  TechAsOff.style.display = "flex";
  TechAsBtnOn.parentElement.classList.remove('act');
  TechAsBtnOff.parentElement.classList.add('act');
})

function chooseDir() {

  step3 = document.getElementById('step3');
  tab3 = document.getElementById('tab3');

  if (document.getElementById('__select__checkbox0').checked) {
    selectDir = document.getElementById('__select__checkbox0').value;
  } else {
    selectDir = document.getElementById('__select__checkbox1').value;
  }

  if (selectDir == '1') {
    step3.style.display = "none";
    tab3.classList.add('hide');
      // change tab5
    TechAsOn.classList.add('show');
    ChooseTaskOption.classList.add('hide');
  } else {
    step3.style.display = "block";
    tab3.classList.remove('hide');
       // change tab5
    TechAsOn.classList.remove('show');
    ChooseTaskOption.classList.remove('hide');
  }
}


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");

  x[n].classList.add('show');
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == 3) {
    document.getElementById("place-form__button_main").style.display = "none";
  } else {
    document.getElementById("place-form__button_main").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
    // document.getElementById("nextBtn").type = "submit";
    document.getElementById("nextBtn").setAttribute('onclick', 'popup_message_show()');
}

  else {
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

  nextTab = currentTab + n;

  if (nextTab === 2 && x[nextTab].classList.contains('hide')) {
      // hide tab3
    x[currentTab].classList.remove('show');
    x[currentTab].classList.add('hide');
    currentTab = currentTab + n;
  }

  x[currentTab].classList.add('hide');
  x[currentTab].classList.remove('show');
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;



  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:

    // document.querySelector('#place-form').submit(function(e){
      // e.preventDefault();
      // $.ajax({
      //     url: 'http://opikal/place-application.html',
      //     type: 'get',
      //     data:$('#place-form').serialize(),
      //     success: function () {
      //       popup_message_show();
      //     },
      // });
      // popup_message_show();
    //   return false;
    // });

    // form.submit();
    // setTimeout('document.location.href="customer-drafts.html";', 2000);
    // redirect customer-drafts.html + window
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

function parentHide(elem) {
  var edits = elem.parentNode.id;
  var editsClose = document.getElementById(edits);
  editsClose.style.display = "none";
}

/**********************Category**************************/

// const selectCategory = document.querySelector('.__select__category');
const placeNotice = document.querySelector('.place__notice');


$("#__select__category").change(function () {

  $(this).removeClass("invalid");

  var selectedCategory = $(this).val();

  if(selectedCategory != "1") {
    $(".__select__equipment").addClass("act");
    $(".__select__checkbox").addClass("act");
    $(".tab1 .place_right").addClass("act");
    $(".place__notice").removeClass("act");
    // $(".__select__category .__select__arrow").addClass("act");
  }
  else {
    $(".__select__equipment").removeClass("act");
    $(".__select__checkbox").removeClass("act");
    $(".tab1 .place_right").removeClass("act");
    // $(".__select__category .__select__arrow").removeClass("act");
  }
});


/**********************Equipment**************************/

/**********************Status**************************/

$("#__select__status").change(function() {

  $(this).removeClass("invalid");

  var selectedStatus = $(this).val();

  if(selectedStatus === "1") {

    $(".tab2 .place__attention").addClass("act");
    $(".tab2 .place__attention").removeClass("hide");
    $(".place__notice").removeClass("act");
    // $(".__select__category .__select__arrow").addClass("act");

  }
  else {
    $(".tab2 .place__attention").removeClass("act");
    $(".tab2 .place__attention").addClass("hide");
    // $(".__select__category .__select__arrow").removeClass("act");
  }
});


/**********************Aim**************************/

$("#__select__aim").change(function () {
  $(this).removeClass("invalid");

  var selectedAim = $(this).val();
  if(selectedAim === "1"){
    $(".tab3 .place__attention").addClass("act");
    $(".tab3 .place__attention").removeClass("hide");
    $(".tab3 .place_right").removeClass("act");
  }
  else {
    $(".tab3 .place_right").removeClass("act");
    $(".tab3 .place__attention").removeClass("act");
    $(".tab3 .place__attention").addClass("hide");
  }
});

/**********************Country**************************/

$("#country__select").change(function () {
  $(this).removeClass("invalid");

  var selectCountry = $(this).val();
  if(selectCountry === "1"){
    $(".tab4 .country__input").addClass("act");
    $(".tab4 .country__input").removeClass("hide");
  }
  else {
    $(".tab4 .country__input").removeClass("act");
    $(".tab4 .country__input").addClass("hide");
  }
});

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



//for chats

function print_chat(printId) {
  var prtContent = document.getElementById(printId);
//
}
// function {

// }
function send_message() {
  
}

$('.chat__user__ico').hover(
  function () {
    $(':nth-child(2)', this).toggleClass('active');
  }
);
  
$('.to_highlight').click(
  function () {
    $(this).parent().parent().parent().addClass('highlighted');
  }
)