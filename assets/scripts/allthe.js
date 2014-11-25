if ($(window).width() > 500) {
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 200) {
	        $('.the-bauble').addClass('no-animation');
	        $('.about-baubles').show().addClass('droppin-baubles');
	    }

	    if (scroll >= 500) {
	    	$('.slippers-bauble').addClass('swingin-baubles');
	    }

	    else {
	    	$('.the-bauble').removeClass('no-animation');
	    }
	}); 
}