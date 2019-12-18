import React from 'react';
import ShipModel from '../../models/ShipModel';
import ShipDetail from './ShipDetail';

class ShipsPage extends React.Component {
	state = {
		ships: []
	}

	getAll = () => {
		ShipModel.all().then(res => {
			console.log(res);
			this.setState({ ships: res });
		})
	}

	componentDidMount() {
		this.getAll();
	}

	render() {
		let ships = this.state.ships.map(item =>
			<p>{item.name}</p>
		);


		return (
			<div>
				<h1 style={{ color: 'white' }}>Ships</h1>
				{ ships }
			</div>
		)
	}
}

export default ShipsPage;