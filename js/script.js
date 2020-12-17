
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

$('.nav__burger').click(function(event){
    $('.nav__burger, .menu').toggleClass('active');
});

$('.account-menu__burger_btn').click(function(event){
    $('.account-menu__burger_menu').toggleClass('active');
});

$('.search__icon-2').click(function(event){
    $('.advanced-search').toggleClass('active');
});

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

// ОТКРЫТИЕ И ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА

$(".modal-trigger").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({"display":"block"});
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".modal__close, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });

// PLACEHOLDER

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

// ОТОБРАЖЕНИЕ НАЗВАНИЯ КАРТИНКИ

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

// ОТОБРАЖЕНИЕ НАЗВАНИЯ ФАЙЛА ПОСЛЕ ЗАГРУЗКИ

$('.input-upload_doc').on('change', function() {
    var splittedFakePath = this.value.split('\\');
    $('.upload-doc__file-name').text(splittedFakePath[splittedFakePath.length - 1]);
});

document.addEventListener("DOMContentLoaded", uploadImg);


$('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
});
 
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
 
})()
 
document.getElementById('gallery').addEventListener("DOMContentLoaded", showGallery, false);
*/