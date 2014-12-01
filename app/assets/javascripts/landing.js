var login_open = false;

$(document).ready(function(){
	$("#login-open-button").click(function(){
		if(!login_open){
			$("#login-dialog").animate({bottom: "35%"}, 350);
			$("#login-dialog").removeClass("dialog-hidden", 1000, "linear");
			$("#landing-filter").removeClass("filter-hidden", 1000, "linear");
			login_open = true;
		} else{
			$("#login-dialog").animate({bottom: "300%"}, 350);
			$("#login-dialog").addClass("dialog-hidden", 1000, "linear");
			$("#landing-filter").addClass("filter-hidden", 1000, "linear");
			//Clears input values, but won't reset the format
			$("#username-input").val('');
			$("#password-input").val('');
			login_open = false;
		}
	});

	$("#login-cancel").click(function(){
		$("#login-dialog").animate({bottom: "300%"}, 350);
		$("#login-dialog").addClass("dialog-hidden", 1000, "linear");
		$("#landing-filter").addClass("filter-hidden", 1000, "linear");
		//Clears input values, but won't reset the format
		$("#username-input").val('');
		$("#password-input").val('');
		login_open = false;
	});
/*
	$(".basic-info-button").click(function(){
		//if (b1&&b2&&b3&&b4&&b5&&b6&&b7){
		$(".basic-info").animate({opacity: 0}, 600);
		setTimeout(function(){$(".basic-info").css("display","none")}, 600);
		setTimeout(function(){$(".game-select").css("display","block")}, 600);
		$(".game-select").delay(600).animate({opacity: 1}, 600);
		//}
	});*/
});