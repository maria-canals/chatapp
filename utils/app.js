export const getTime = () => {
	const date = new Date();
	let minutes = date.getMinutes();
	let hour = date.getHours();
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();

	month = month + 1;

	switch (month) {
		case 1:
			month = 'Ene';
			break;
		case 2:
			month = 'Feb';
			break;
		case 3:
			month = 'Marz';
			break;
		case 4:
			month = 'Abr';
			break;
		case 5:
			month = 'Mayo';
			break;
		case 6:
			month = 'Jun';
			break;
		case 7:
			month = 'Jul';
			break;
		case 8:
			month = 'Ago';
			break;
		case 9:
			month = 'Sep';
			break;
		case 10:
			month = 'Oct';
			break;
		case 11:
			month = 'Nov';
			break;
		case 12:
			month = 'Dic';
			break;
	}
	day = add0(day);
	// month = add0(month);
	hour = add0(hour);
	minutes = add0(minutes);

	return `${day} ${month} ${year}/ ${hour}:${minutes}h`;
};

const add0 = el => {
	return el < 10 ? (el = '0' + el) : el;
};
