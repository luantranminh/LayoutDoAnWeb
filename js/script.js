//Chinh kieu cua cac header khac nhau
var title = document.title;

if(title !== "Home") {
	 $('.cart-count').addClass('colorBar borderBar');
	 $('.cart-text').addClass('colorBar borderBar');
	 
	 $('.nav-link').attr('color', 'black');
	 $('.navbar-brand').attr('color', 'black');
	 
	 $('.navbar.navbar-expand-md.fixed-top').addClass('paddingBar');
}