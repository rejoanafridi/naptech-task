$(document).ready(function () {
	$(".menu-icon").click(function () {
		$("#nav-item").removeClass("d-none").toggle();
		// $("#nav-item").toggle();
	});

	$(document).ready(function () {
		$(".counter").counterUp({
			delay: 10,
			time: 800
			
		});
	});
});
