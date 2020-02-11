$(document).ready(function() { 
						   
	var slides = $(".slider .slides").children(".slide"); 
	var width = $(".slider .slides").width(); 
	var i = slides.length; 
	var offset = i * width; 
	
	$(".slider .slides").css('width',offset); 
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(" .navigation").append("<div class='dot active'></div>");
		}
		else {
			$(" .navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".navigation").children(".dot");
	offset = 0; 
	i = 0; 
	
	$('.navigation .dot').click(function(){
		$(".navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
	});

});