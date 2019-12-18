const END_POINT = `http://localhost:3001/characters`;

class CharacterModel {
	static all = () => {
		return fetch(END_POINT)
			.then(response => response.json())
			.catch(error => console.log('Could not get characters:\n', error));
	}

	static create = item => {
		return fetch(END_POINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(item)
		})
		.then(response => response.json())
		.catch(error => console.log('Failed to create character:\n', error));
	}

	static delete = item => {
		return fetch(`${END_POINT}/${item._id}`, {
			method: 'DELETE'
		})
			.then(response => response.json())
			.catch(error => console.log('Failed to delete character:\n', error));
	}

	static update = item => {
		return fetch(`${END_POINT}/${item._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: JSON.stringify(item)
		})
		.then(response => response.json())
		.catch(error => console.log('Failed to update character:\n', error));
	}
}

export default CharacterModel;