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

export { getGenderString, getNameLastFirst };