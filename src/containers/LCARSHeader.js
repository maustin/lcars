import React from 'react';
import LCARSHeaderBackground from '../components/LCARSHeaderBackground';
import LCARSHeaderBody from '../components/LCARSHeaderBody';

class LCARSHeader extends React.Component {
	render() {
		return (
			<div className='lcars-header'>
				<LCARSHeaderBackground />
				<LCARSHeaderBody />
			</div>
		)
	}
}

export default LCARSHeader;