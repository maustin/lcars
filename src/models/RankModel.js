import { API_URL } from '../utils/Constants';

const END_POINT = `${API_URL}/ranks`;
//const END_POINT = `http://localhost:3001/ranks`;

class RankModel {
	static all = () => {
		return fetch(END_POINT)
			.then(response => response.json())
			.catch(error => console.log('Could not get ranks:\n', error));
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
		.catch(error => console.log('Failed to create ranks:\n', error));
	}

	static delete = item => {
		return fetch(`${END_POINT}/${item._id}`, {
			method: 'DELETE'
		})
			.then(response => response.json())
			.catch(error => console.log('Failed to delete ranks:\n', error));
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
		.catch(error => console.log('Failed to update ranks:\n', error));
	}
}

export default RankModel;