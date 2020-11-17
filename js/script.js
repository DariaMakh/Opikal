
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

$(function(){
    var modal = {
        self: $('.modal'),

        showModal: function(content){
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function(){
            this.self.fadeOut(200);
            this.self.find('#innerModal').html('');
        }
    };

    $(".showModal").on('click', function(e){
        var id = $(this).data('id');
        var content = $('#cont'+id).html();
        modal.showModal(content);
    });

    $(".modal__close").click(function(){
        $(".modal").fadeOut(200);
    });

    $('.modal').on('click', function(e){
        if ($(e.target).attr('id') === 'modal' || $(e.target).hasClass('modal__close')){
            modal.hideModal();
        } 
        else {
            return false;
        }
    });
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

if ($('.modal-content__inputs .input').length > 0) {
	$('.modal-content__inputs .input').each(function(){
		var val = $(this).val();
		var parent = $(this).parent();
		if (val != '') {
			$('.placeholder', parent).addClass('placeholder-act');
		}
	});
}

function uploadImg(){
    var inputImg = document.querySelectorAll('.input-upload_img');
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

$('.input-upload_doc').on('change', function() {
    var splittedFakePath = this.value.split('\\');
    $('.upload-doc__file-name').text(splittedFakePath[splittedFakePath.length - 1]);
});

document.addEventListener("DOMContentLoaded", uploadImg);