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

$('.modal-slider').slick({
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  verticalSwiping: true,
  infinite: true,
  initialSlide: 0,
  pauseOnHover: true,
  nextArrow: $('.modal-slider__next'),
  prevArrow: $('.modal-slider__prev'),
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

$(".profile_img").change(function(){
  imgFileName = this.files[0].name;
  if (imgFileName){
    $(".profile_img").next().text(imgFileName);
  }
});

// --------- GALLERY OF PICTURES ---------

$(function(){
  $('#gallery').change(function(e) {
    var files = e.target.files;
		for (var i = 0; i <= files.length; i++) {
      
      // when i == files.length reorder and break
      if(i==files.length){
        // need timeout to reorder beacuse prepend is not done
        setTimeout(function(){ reorderImages(); }, 100);
        break;
      }
      
      var file = files[i];
      var reader = new FileReader();
      
      reader.onload = (function(file) {
        return function(event){
          $('#gallery-list').prepend('<li class="gallery-list__item" data-order=0 data-id="'+file.lastModified+'"><img src="' + event.target.result + '" /> <span class="delete"></span></li>');
        };
      })(file);
      
      reader.readAsDataURL(file);
    }// end for;
  });
  
  
  function reorderImages(){
    // get the items
    var images = $('#gellery-list li');
    
    var i=0;
    for(i;i<images.length;i++){
      
      var image = $(images[i]);
      
      if( image.hasClass('gallery-list__item')){
        image.attr('data-order');
      }// end if;
      
    }// end for;
  }
});

 

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
        minlength: 10,
        maxlength: 10,
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
        minlength: '',
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


 $('._select').each(function(){
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


	/***************** CHOSEN *******************/

	function chosen_init(){

		$('.chosen').chosen({

			no_results_text: "Не найдено",

			width:'100%',

			search_contains: true

		});

	}

chosen_init();

$('.chosen').trigger('chosen:updated');