
// serach button
	$(".search").click(function() {
		$(".togglesearch").toggle();
		
	});

// counter-up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


// service slider

$('.service-slider').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	// adaptiveHeight: true,
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });



// testimonial slider


$('.testimonial-slider').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	adaptiveHeight: true,
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });


//   project  part slider
$('.project-slider').slick({
	dots: true,
	infinite: true,
	arrows: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow:'',
	nextArrow:'<i class="fas fa-angle-right next"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });




//   pro  part slider 
$('.pro-slider').slick({
	dots: true,
	infinite: true,
	arrows: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow:'<i class="fas fa-angle-left left"></i>',
	nextArrow:'<i class="fas fa-angle-right right"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });


  $('.blog-slider').slick({
	dots: true,
	infinite: true,
	arrows: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow:'<i class="fas fa-angle-left left"></i>',
	nextArrow:'<i class="fas fa-angle-right right"></i>',
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 576,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }
	]
  });




// ----------backto to button start js

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// ----------backto to button end js


// -------------barfiller js start  

$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	
});

