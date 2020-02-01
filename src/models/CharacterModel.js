import { API_URL } from '../utils/Constants';
const END_POINT = `${API_URL}/characters`;

class CharacterModel {
	static all = () => {
		return fetch(END_POINT)
		.then(response => response.json())
		.catch(error => console.log('Could not get characters:\n', error));
	}

	static single = id => {
		return fetch(`${END_POINT}/${id}`)
		.then(response => response.json())
		.catch(error => console.log('Could not get character:\n', error));
	}

	static create = item => {
		return fetch(END_POINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})
		.catch(error => console.log('Failed to create character:\n', error));
		//.then(response => response.json())
	}

	static delete = id => {
		return fetch(`${END_POINT}/${id}`, {
			method: 'DELETE'
		})
		.catch(error => console.log('Failed to delete character:\n', error));
		//.then(response => response.json())	
	}

	static update = item => {
		return fetch(END_POINT, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})
		.catch(error => console.log('Failed to update character:\n', error));
		//.then(response => response.json())
	}
}

export default CharacterModel;