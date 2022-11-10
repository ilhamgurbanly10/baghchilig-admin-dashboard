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







