function toggle_class(e) {
    $(e).parent().parent().toggleClass('active');
}
$('.tab_row__item_button').attr("onClick", "javascript:toggle_class(this); return false;"); 


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

var currentCheck = 0; // Current tab is set to be the first tab (0)
// showCheck(currentCheck); // Display the current check


function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // showCheck(currentCheck);
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

function showCheck(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    var sub = x[currentTab].getElementsByClassName("check");
    if (sub.length != 0) {
        sub[n].style.display = "block";
        // ... and run a function that displays the correct step indicator:
        fixCheckIndicator(n);
    }

}

function nextPrev(n) {
  // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    //
    var sub = x[currentTab].getElementsByClassName("check");

    // if (sub.length > 0) {
        // alert(sub.length); 
        if ((currentCheck == 0) && (n == -1) ) {
            // Hide the current tab:
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // currentCheck = 0;
            showTab(currentTab);
            if (sub.length > 0) {
                currentCheck = sub.length + n;
                showCheck(currentCheck);
            }
            alert(2222);
            return false;
        }
        if ((currentCheck < (sub.length - 1)) || 
            (currentCheck == (sub.length - 1)) && (n == -1)) {
            
            // alert(currentCheck);
            sub[currentCheck].style.display = "none";
            currentCheck = currentCheck + n;
            showCheck(currentCheck);
            alert(3333);

            return false;
        }
        if ((currentCheck == (sub.length - 1)) && (n == 1) ) {
            // Hide the current tab:
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // currentCheck = 0;
            showTab(currentTab);
            currentCheck = 0;
            showCheck(currentCheck);
            alert(4444);

            return false;
        }

        
        
    // }
    // else {
    //     // Hide the current tab:
    //     x[currentTab].style.display = "none";
    //     // Increase or decrease the current tab by 1:
    //     currentTab = currentTab + n;
    //     alert(sub.length);
    //     // alert(currentCheck);
    //     showTab(currentTab);
    //     showCheck(currentCheck);
    //     return false;
    // }

    // alert(currentCheck >= (sub.length));
    if (currentCheck >= (sub.length - 1)) {
        alert(666);

        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        
        alert(999);
        // alert(currentCheck);
        if (sub.length > 0) {
            currentCheck = sub.length - 1
        }
        else {
            currentCheck = sub.length;
        }
        showTab(currentTab);
        
        showCheck(currentCheck);
        
        return false;

    }


  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
    // alert(currentTab);

  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
      var i = 0;
      alert(777);
    // document.getElementByClassName("list__new-eqpm").style.display = "none";
    //...the form gets submitted:
    document.getElementById("tech-com-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
    // showTab(currentTab);
    // showCheck(currentCheck);
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

function fixCheckIndicator(n) {
    // This function removes the "active" class of all steps...
    var tab = document.getElementsByClassName("tab");
    var i, x = tab[currentTab].getElementsByClassName("check_item");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}



