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
  var current_subtabs = x[currentTab].getElementsByClassName("check");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  //Если показанная вкладка последняя и на ней нет подвкладок
  if ((n == (x.length - 1)) && (current_subtabs.length == 0)) {
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
	//Если подвкладка последняя на последней вкладке
	if ((currentTab == (x.length - 1)) && (n == (sub.length - 1))) {
		document.getElementById("nextBtn").innerHTML = "Отправить";
	} else {
		document.getElementById("nextBtn").innerHTML = "Продолжить";
	}

    if (sub.length != 0) {
        sub[n].style.display = "block";
        // ... and run a function that displays the correct step indicator:
        fixCheckIndicator(n);
    }

}

function nextPrev(n) {
	// This function will figure out which tab to display
	// currentTab - счетчик для больших вкладок
	// currentCheck - счетчик для подвкладок

    var x = document.getElementsByClassName("tab");

	//подвкладки на текущей вкладке
	var current_subtabs = x[currentTab].getElementsByClassName("check");
	//количество подвкладок на текущей вкладке
	var number_of_subtabs = current_subtabs.length;

	//Перед проверкой следующей вкладки проверяем, не является ли текущая последней
	if(currentTab + n < x.length){
		//подвкладки на следующей/предыдущей вкладке
		var nextprev_subtabs = x[currentTab + n].getElementsByClassName("check");
		//количество подвкладок на следующей/предыдущей вкладке
		var nextprev_number_of_subtabs = nextprev_subtabs.length;
	}
	else
	{
		var nextprev_number_of_subtabs = 0;
	}

	//Тут уже должна была быть надпись Отправить (последняя вкладка и последняя подвкладка)
	if((currentTab == x.length - 1) && currentCheck == number_of_subtabs - 1){
		document.getElementById("tech-com-form").submit();
	}
	// если на текущей вкладке нет подвкладок
	if(number_of_subtabs == 0){
		//скрываем текущую вкладку
		x[currentTab].style.display = "none";
		//Измеяем счетчик вкладок
		currentTab = currentTab + n;
		//показываем следующую/предыдущую вкладку
		showTab(currentTab);
		//проверяем есть ли на следующей/предыдущей подвкладки
		if (nextprev_number_of_subtabs != 0){
			// если возвращаемся на вкладку с подвкладками - то показываем последнюю подвкладку
			if (n == -1){
				currentCheck = nextprev_number_of_subtabs - 1;
			} 
			// иначе если переходим на вкладку с подвкладками - то показываем первую подвкладку
			else {
				currentCheck = 0;
			}
			//показываем нужную подвкладку
			showCheck(currentCheck);
		}
	// если на текущей вкладке есть подвкладки
	} else {
		//скрываем текущую подвкладку
		current_subtabs[currentCheck].style.display = "none";
		//Измеяем счетчик подвкладок
		currentCheck = currentCheck + n;
		//провряем нужно ли перейти на следующую/предыдущую вкладку
		if((currentCheck < 0) || (currentCheck >= number_of_subtabs)){
			//скрываем текущую вкладку
			x[currentTab].style.display = "none";
			//Измеяем счетчик вкладок
			currentTab = currentTab + n;
			//показываем следующую/предыдущую вкладку
			showTab(currentTab);
			//проверяем есть ли на следующей/предыдущей подвкладки
			if (nextprev_number_of_subtabs != 0){
				// если возвращаемся на вкладку с подвкладками - то показываем последнюю подвкладку
				if (n == -1){
					currentCheck = nextprev_number_of_subtabs - 1;
				} 
				// иначе если переходим на вкладку с подвкладками - то показываем первую подвкладку
				else {
					currentCheck = 0;
				}
				//показываем нужную подвкладку
				showCheck(currentCheck);
			}
		}
		// или нужно показывать подвклавдку 
		else {
			showCheck(currentCheck);
		}
		
	}

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



