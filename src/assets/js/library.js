
// flash-navbar-animation
export function flashNavbarAnimation(nav) {

	let scrollTop;

	const check = () => {
		scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		scrollTop > 20 ? show() : hide();
	}

	const show = () => {
		nav.classList.add('is-hidden');
		setTimeout(function() { nav.classList.add('is-scrolled'); }, 300);
	} 

	const hide = () => {
		nav.classList.remove('is-hidden');
		setTimeout(function() { nav.classList.remove('is-scrolled'); }, 300)
	}

	window.addEventListener('scroll', check);
	check();

}

// the-end-of-flash-navbar-animation

export default flashNavbarAnimation;


