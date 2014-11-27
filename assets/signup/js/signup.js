var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;
var b5 = false;
var b6 = false;
var b7 = false;

$(document).ready(function(){
	$("#firstname-input").focusout(function(){
		result = $(this).val() == '';
		document.getElementById('firstname-decor').isInvalid = result;
		b1 = !result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#lastname-input").focusout(function(){
		result = $(this).val() == '';
		document.getElementById('lastname-decor').isInvalid = result;
		b2 = !result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#email-input").focusout(function(){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		result = ($(this).val() == '' || !re.test($(this).val()));
		b3 = !result;
		if ($(this).val() == ''){
			document.getElementById('email-decor').error = "Input is required!";
		} else if (!re.test($(this).val())){
			document.getElementById('email-decor').error = "Invalid e-mail address!";
		}
		document.getElementById('email-decor').isInvalid = result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#email-confirm-input").focusout(function(){
		result = ($(this).val() == '' || $(this).val() != $("#email-input").val());
		b4 = !result;
		if ($(this).val() == ''){
			document.getElementById('email-confirm-decor').error = "Input is required!";
		} else if ($(this).val() != $("#email-input").val()){
			document.getElementById('email-confirm-decor').error = "Confirmation e-mail address does not match the above!";
		}
		document.getElementById('email-confirm-decor').isInvalid = result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#username-input").focusout(function(){
		result = $(this).val() == '';
		document.getElementById('username-decor').isInvalid = result;
		b5 = !result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#password-input").focusout(function(){
		result = ($(this).val() == '' || $(this).val().length < 4);
		if ($(this).val() == ''){
			document.getElementById('password-decor').error = "Input is required!";
		} else if ($(this).val().length <= 4){
			document.getElementById('password-decor').error = "Password is too short!";
		}
		document.getElementById('password-decor').isInvalid = result;
		b6 = !result;
		enablecheck($(".basic-info-button"), 0);
	});
	$("#password-confirm-input").focusout(function(){
		result = ($(this).val() == '' || $(this).val() != $("#password-input").val());
		if ($(this).val() == ''){
			document.getElementById('password-confirm-decor').error = "Input is required!";
		} else if ($(this).val() != $("#password-input").val()){
			document.getElementById('password-confirm-decor').error = "Confirmation password does not match the above!";
		}
		document.getElementById('password-confirm-decor').isInvalid = result;
		b7 = !result;
		enablecheck($(".basic-info-button"), 0);
	});

	$(".basic-info-button").click(function(){
		if (b1&&b2&&b3&&b4&&b5&&b6&&b7){
			$(".basic-info").animate({opacity: 0}, 600);
			setTimeout(function(){$(".basic-info").css("display","none")}, 600);
			setTimeout(function(){$(".game-select").css("display","block")}, 600);
			$(".game-select").delay(600).animate({opacity: 1}, 600);
		}
	});
});

function enablecheck($button, flag) {
	if (flag ==0){
		if (b1&&b2&&b3&&b4&&b5&&b6&&b7){
			$button.css("opacity", "1");
			$button.removeAttr("disabled");
		} else{
			$button.css("opacity", "0.2");
			$button.attr("disabled");
		}
	} else{

	}
}