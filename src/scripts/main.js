$(document).ready(function () {
	$('#homeBanner').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		dots: true
	});

	$('#homeServices').owlCarousel({
		items:1,
		margin: 0,
		loop: true,
		dots: true,
		responsive: {
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				loop: false,
				items: 6,
				dots: false
			}
		}
	});

	$('#homeFeedback').owlCarousel({
		items:1,
		loop:true,
		margin:10,
		dots: true
	});


	$('#homeNews').owlCarousel({
		items:1,
		loop:true,
		margin:30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});

	$('#homeClients').owlCarousel({
		items:2,
		loop:true,
		margin:30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			576: {
				items: 3
			},
			768: {
				items: 4
			}
		}
	});
})
