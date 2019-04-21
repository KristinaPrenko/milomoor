$ (function () {
	var screenWidth = window.screen.width;
	if (screenWidth < 900) {
		$('.about__item-title').on('click', function () {
			// event.preventDefault();
			$(this).next('.about__item-desc').stop(true, true).slideToggle(500);
		});
	}


})