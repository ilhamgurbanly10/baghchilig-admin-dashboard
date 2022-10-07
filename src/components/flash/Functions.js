import { useLocation } from 'react-router-dom';

export function FlashGetPageName() {
    const location = useLocation();
    return location.pathname == '/' ?  "Home" : location.pathname[1].toUpperCase() + location.pathname.slice(2);
}    

export const SearchResult = (form) => {

	const input = form.querySelector('.search-form-input');
	const list = form.querySelector('.search-form-result-list');
	const submit = form.querySelector('.search-form-submit');
	const reset = form.querySelector('.search-form-reset');

	// functions
    const toggle = () => {
		if (input.value != "") show();
        else { hide(); disableSubmit(); hideReset(); }	
	}

	const show = () => {
		if (input.value != "") { 
			list.classList.add('show');
			enableSubmit();
			showReset();
		}	
	}

	const hide = () => list.classList.remove('show'); 

	const enableSubmit = () =>  submit.removeAttribute('disabled'); 

	const disableSubmit = () => submit.setAttribute('disabled',''); 

	const showReset = () => reset.classList.add('show'); 

	const hideReset = () =>  reset.classList.remove('show');  

	const checkButtons = () => {
		if (input.value != "") { enableSubmit(); showReset(); } 
        else { disableSubmit(); hideReset(); }
	}

    // adding-events
    input.addEventListener('keyup', toggle);
    input.addEventListener('focusin', show);
    input.addEventListener('focusout', hide);
    input.addEventListener('keyup', checkButtons);

	reset.addEventListener('click', hideReset);
    reset.addEventListener('click', disableSubmit);

}
