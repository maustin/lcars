import React from 'react';
import RankModel from '../../models/RankModel';
import RanksDetail from './RankDetail';

class RanksPage extends React.Component {
	state = {
		ranks: []
	}

	getAll = () => {
		RankModel.all().then(res => {
			console.log(res);
			this.setState({ ranks: res });
		})
	}

	componentDidMount() {
		this.getAll();
	}

	render() {
		let ranks = this.state.ranks.map(item =>
			<p>{item.name}</p>
		);


		return (
			<div>
				<h1 style={{ color: 'olive' }}>Ranks</h1>
				{ ranks }
			</div>
		)
	}
}

export default RanksPage;