import React from 'react';
import SpeciesModel from '../../models/SpeciesModel';
import SpeciesDetail from './SpeciesDetail';

class SpeciesPage extends React.Component {
	state = {
		species: []
	}

	getAll = () => {
		SpeciesModel.all().then(res => {
			console.log(res);
			this.setState({ species: res });
		})
	}

	componentDidMount() {
		this.getAll();
	}

	render() {
		let species = this.state.species.map(item =>
			<p>{item.name}</p>
		);


		return (
			<div>
				<h1 style={{ color: 'purple' }}>Species</h1>
				{ species }
			</div>
		)
	}
}

export default SpeciesPage;