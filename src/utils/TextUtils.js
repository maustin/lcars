const GENDERS = {
	'm': 'Male',
	'f': 'Female',
	'na': 'Not Applicable',
	'mp': 'Male-presenting',
	'fp': 'Female-presenting'
}

function getGenderString(key) {
	if (GENDERS[key])
		return GENDERS[key];

	return key;
}

function getNameLastFirst(name) {
	let lastSpace = name.lastIndexOf(' ');
	if (lastSpace === -1)
		return name;

	let first = name.substring(0, lastSpace);
	let last = name.substring(lastSpace + 1);

	return last + ', ' + first;
}

function getRandomNumberFill(format) {
	let str = "";

	for (let i = 0; i < format.length; i++) {
		if (format.charAt(i) == 'x')
			str += Math.floor(Math.random() * 10).toString();
		else
			str += format.charAt(i);
	}

	return str;
}

export { getGenderString, getNameLastFirst, getRandomNumberFill };