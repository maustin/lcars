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

	handleNavClick = target => {

	}

	render() {
		return (
			<div className='lcars-content'>
				<LCARSContentBackground navHandler={this.handleNavClick} navTargets={this.navTargets} />
				<LCARSContentBody />
			</div>
		)
	}
}

export default LCARSContent;