let burger = document.querySelector('.burger-nav');

burger.addEventListener('click', function() {
	let menuArea = document.querySelector('.section-area--left');
	menuArea.classList.toggle('active');
})