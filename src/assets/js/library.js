
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

export default flashNavbarAnimation;

// the-end-of-flash-navbar-animation


// close-navbar-nav

export const closeNavbarNav = (toggler, buttons) => {
    buttons.forEach(btn => btn.onclick = function() { toggler.click(); });
}

// the-end-of-close-navbar-nav


// flash-create-element

export function flashCreateElement(tagName, html = "", attributes = {}, parent = false, childIndex = "last-child") {

	var el = document.createElement(''+tagName+'');
	el.innerHTML = html;

	for (let x in attributes) {	el.setAttribute(''+x+'',''+attributes[x]+''); }

  	if (parent) {

  		if (childIndex == "last-child") parent.appendChild(el);
  		else if (childIndex == "first-child") parent.insertBefore(el, parent.childNodes[0]);
 		else parent.insertBefore(el, parent.children[childIndex]);
  	}

  	return el;

}

// the-end-of-flash-create-element



