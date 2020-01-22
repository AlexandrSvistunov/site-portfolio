var burgerMenuItem = document.querySelector('.burger-item');

burgerMenuItem.onclick = function () {
	var MenuBurger = document.querySelector('.burger-lines');
	var mobileNav = document.querySelector('.mobile-nav');

	MenuBurger.classList.toggle('burger-active');
	mobileNav.classList.toggle('mobile-nav-active');

};
