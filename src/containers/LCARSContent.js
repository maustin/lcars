import React from 'react';
import LCARSContentBackground from '../components/LCARSContentBackground';
import LCARSContentBody from '../components/LCARSContentBody';

class LCARSContent extends React.Component {
	navTargets = {
		characters: '/characters',
		ships: '/ships',
		species: '/species',
		ranks: '/ranks'
	};

	render() {
		return (
			<div className='lcars-content'>
				<LCARSContentBackground navTargets={this.navTargets} />
				<LCARSContentBody />
			</div>
		)
	}
}

export default LCARSContent;