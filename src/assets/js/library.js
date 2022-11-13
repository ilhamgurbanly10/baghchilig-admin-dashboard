// -get-date-
export const getDate = (zeros = true) => {

	const date =  new Date();
	let day = date.getDate();
	let month = Number(date.getMonth()) + 1;
	let year = date.getFullYear();

	if (zeros) {
	  if (day < 10) day = "0" + day;
	  if (month < 10) month = "0" + month;
	} 
	
	return `${day}.${month}.${year}`;
	
}
// -get-date-

// get-random-string
export const getRandomString = (min, max, numbers = false) => {
            
	let str = "";
	const limit = Math.floor((Math.random() * (max - min)) + min);
	const letters = [
		'A','a','B','b','C','c','D','d','E','e','F','f','G',
		'g','H','h','I','i','J','j','K','k','L','l','M','m','N','n'
		,'O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v'
		,'W','w','X','x','Y','y','Z','z'
	];

	const getAll = () => {

		for (let i = 0; i < limit; i++) {

			const isNumber = Math.floor(Math.random() * 2);
			if (isNumber) str +=  Math.floor(Math.random() * 10) 
			else {
				const x = Math.floor(Math.random() * 52);
				str += letters[x];
			} 

		}
	
	}

	const getOnlyLetters = () => {

		for (let i = 0; i < limit; i++) {
			const x = Math.floor(Math.random() * 52);
			str += letters[x];          
		}

	}
	
	numbers ? getAll() : getOnlyLetters();    
	return str;

}
// get-random-string







