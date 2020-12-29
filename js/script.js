// --------- SLIDER ON MAIN PAGE ---------

$('.possibility__slider_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_1'),
    prevArrow: $('.possibility__prev_1'),
});

$('.possibility__slider_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_2'),
    prevArrow: $('.possibility__prev_2'),
});

// --------- BURGER MENU ---------

$('.nav__burger').click(function(event){
    $('.nav__burger, .menu').toggleClass('active');
});

$('.account-menu__burger_btn').click(function(event){
    $('.account-menu__burger_menu').toggleClass('active');
});

$('.search__icon-2').click(function(event){
    $('.advanced-search').toggleClass('active');
});

// ---------  ---------

var select = function(){
    var selectHeader = document.querySelectorAll('.select__header');
    var selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', function(){
            this.parentElement.classList.toggle('active');
        });
    });

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectChoose);
    });

    function selectChoose(){
        var selectItem = this.innerText;
        currentItem = this.closest('.select__box').querySelector('selector__current')
        console.log(selectItem);
    };
}

// --------- MODAL ---------

$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).fadeIn(300);
  $(".modal-trigger2").click(function(e){
      dataModal = $(this).attr("data-modal");
      $(".modal").hide();
      $("#" + dataModal).fadeIn(300);
  });
});

$(".modal__close, .modal-sandbox").click(function(){
  $(".modal").hide();
});

// --------- PLACEHOLDER ---------

$('body').on('focus', '.modal-content__inputs .input', function(){
	var parent = $(this).parent();
	$('.placeholder', parent).addClass('placeholder-act');
});

$('body').on('blur', '.modal-content__inputs .input', function(){
	var val = $(this).val();
	var parent = $(this).parent();
	if (val == '') {
		$('.placeholder', parent).removeClass('placeholder-act');
	}
});

$('body').on('focus', '.modal-content__inputs .input', function(){
	var parent = $(this).parent();
	$('.textarea-placeholder', parent).addClass('placeholder-act');
});

$('body').on('blur', '.modal-content__inputs .input', function(){
	var val = $(this).val();
	var parent = $(this).parent();
	if (val == '') {
		$('.textarea-placeholder', parent).removeClass('placeholder-act');
	}
});

if ($('.modal-content__inputs .input').length > 0) {
	$('.modal-content__inputs .input').each(function(){
		var val = $(this).val();
		var parent = $(this).parent();
		if (val != '') {
			$('.placeholder', parent).addClass('placeholder-act');
		}
	});
}

// --------- NAME OF PDF FILE AFTER UPLOADED IN PROFILE ---------

$('.input-upload_doc').on('change', function() {
  var splittedFakePath = this.value.split('\\');
  $('.upload-doc__file-name').text(splittedFakePath[splittedFakePath.length - 1]);
});

// --------- NAME OF PICTURE AFTER UPLOADED ---------

function uploadImg(){
    var inputImg = document.querySelectorAll('.profile_img');
    Array.prototype.forEach.call(inputImg, function ( input ){
        var label = input.nextElementSibling,
        labelVal = label.innerHTML;

        input.addEventListener( 'change', function (e){
            var imgName = '';
            imgName = this.files[0].name;
            if ( imgName ){
                label.innerHTML = imgName;
            }
            else{
                label.innerHTML = labelVal;
            }
        });
    });
};

document.addEventListener("DOMContentLoaded", uploadImg);

// --------- GALLERY OF PICTURES ---------
/*
var showGallery = (function () {
  var fr = new FileReader,
      i = 0,
      files, file;
  
  fr.onload = function (e) {
      var li, span;
      if (file.type.match('image.*')) {
          li = document.createElement('li');
          li.classList.add('gallery-list__item');
          li.innerHTML = "<img src='" + e.target.result + "'><span class=\"delete\"></span>";
          document.getElementById('gallery-list').appendChild(li);
      }
          file = files[++i];
          if (file) {
              fr.readAsDataURL(file)
          } else {
              i = 0;
          }
  }
  
  return function (e) {
      files = e.target.files;
      file = files[i];
      if (files) {
          while (i < files.length && !file.type.match('image.*')) {
              file = files[++i];
          }
          if (file) fr.readAsDataURL(files[i])
      }
  }

});

document.getElementById('gallery').addEventListener("DOMContentLoaded", showGallery, false);
*/

// --------- TABS ---------

$(function() {

    (function($) {
      $.fn.multitabs = function() {
        var _this = $(this);
        var tabs = _this.children('.tab__header[data-child="false"]').children('div');
        var childrenTabs = _this.find('.tab__header[data-child="true"]').children('div');
    
        $(tabs).add(childrenTabs).on('click', function() {
          var num;
          var _this = $(this);
          var classNameTab = _this.attr('class').split(' ');
          var classNameContent = _this.parent().siblings().children();
    
          for (i = 0; i <= classNameTab.length; i++) {
            if (/([\d.]+)/.test(classNameTab[i])) {
              var isChild = $(_this).parent().data('child');
              num = classNameTab[i].split('-')[1];
              
              if (!isChild) {
                $(tabs).removeClass('tab__header--active');
                $(_this).addClass('tab__header--active');
              } else {
                $(_this).siblings().removeClass('tab__header--active');
                $(_this).addClass('tab__header--active');
              }
    
            }
          }
    
          $(classNameContent).each(function(i, n) {
            var name = $(n).attr('class').split(' ');
            for (n = 0; n <= name.length; n++) {
              if (name[n] != undefined) {
                if (/([\d.]+)/.test(name[n])) {
                  if (num === name[n].split('-')[1]) {
                    var el = $(classNameContent)[num - 1];
                    $(classNameContent).removeClass('tab__content--active');
                    $(el).addClass('tab__content--active');
                  }
                }
              }
            }
          });
    
        });
    
      }
    })(jQuery);
    
$('.tabs').multitabs();
    
});

// --------- CALENDAR ---------

$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function() {
    $("#datepicker").datepicker();
    $("#datepicker-2").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker-2").datepicker("setDate", $('#datepicker_value').val());
});

// --------- VALIDATION ---------

//    customer

$(function(){
  $('#reg-c').validate({
    rules:{
      email:{
        required: true,
        email: true,
      },
      name: {
        required: true,
        minlength: 3,
      },
      password:{
        required: true,
        minlength: 6,
      },
    },
    messages:{
      email:{
        required: '<div class="modal-content__inputs_error">введите почту</div>',
      },
      name:{
        required: '<div class="modal-content__inputs_error">введите имя</div>',
        minlength: "минимальная длина 6",
      },
      password:{
        required: '<div class="modal-content__inputs_error">введите пароль</div>',
        minlength: "минимальная длина 6",
      },
    }
  });
});

//    provisioner

$(function(){
  $('#reg-p').validate({
    rules:{
      email:{
        required: true,
        email: true,
      },
      name: {
        required: true,
        minlength: 3,
      },
      password:{
        required: true,
        minlength: 6,
      },
      tel:{
        required: true,
        minlength: 11,
        maxlength: 11,
      },
      inn:{
        required: true,
        minlength: 6,
      },
      org_name:{
        required: true,
      },
    },
    messages:{
      email:{
        required: '<div class="modal-content__inputs_error">введите почту</div>',
      },
      name:{
        required: '<div class="modal-content__inputs_error">введите имя</div>',
        minlength: "минимальная длина 3",
      },
      password:{
        required: '<div class="modal-content__inputs_error">введите пароль</div>',
        minlength: "минимальная длина 6",
      },
      tel:{
        required: '<div class="modal-content__inputs_error">введите телефон</div>',
      },
      inn:{
        required: '<div class="modal-content__inputs_error">введите инн</div>',
      },
      org_name:{
        required: '<div class="modal-content__inputs_error textarea_error">введите название организации</div>',
      },
    }
  });
});

// --------- SELECT ---------

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select-box"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});