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