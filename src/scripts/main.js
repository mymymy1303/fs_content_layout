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
				mouseDrag: false, 
				dots: false
			}
		}
	});
})
