import { API_URL } from '../utils/Constants';
const END_POINT = `${API_URL}/ships`;

class ShipModel {
	static all = () => {
		return fetch(END_POINT)
			.then(response => response.json())
			.catch(error => console.log('Could not get ships:\n', error));
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
		.catch(error => console.log('Failed to create ships:\n', error));
	}

	static delete = item => {
		return fetch(`${END_POINT}/${item._id}`, {
			method: 'DELETE'
		})
			.then(response => response.json())
			.catch(error => console.log('Failed to delete ships:\n', error));
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
		.catch(error => console.log('Failed to update ships:\n', error));
	}
}

export default ShipModel;