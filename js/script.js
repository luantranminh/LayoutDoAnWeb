//Chinh kieu cua cac header khac nhau
// var title = document.title;

// if(title !== "Home") {
// 	 $('.cart-count').addClass('colorBar borderBar');
// 	 $('.cart-text').addClass('colorBar borderBar');

// 	 $('.nav-link').attr('color', 'black');
// 	 $('.navbar-brand').attr('color', 'black');

// 	 $('.navbar.navbar-expand-md.fixed-top').addClass('paddingBar');
// }



	var navbar = document.getElementsByClassName("navbar-toggler");

	navbar[0].addEventListener('click', function() {
	//some bug :(
	if(!$(".navbar-collapse").hasClass("show")) {
		$("#btn-cart").hide();
	}
	else
	{
		$("#btn-cart").show();
	}

	document.getElementById("cart-trans").addEventListener("click", handler);

	// handler function
	function handler(e) {
	// remove this handler
	e.target.removeEventListener(e.type, arguments.callee);

	alert("You'll only see this once!");
}
})

