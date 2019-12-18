import React from 'react';
import LCARSContentBackground from '../components/LCARSContentBackground';
import LCARSContentBody from '../components/LCARSContentBody';

class LCARSContent extends React.Component {
	render() {
		return (
			<div className='lcars-content'>
				<LCARSContentBackground />
				<LCARSContentBody />
			</div>
		)
	}
}

export default LCARSContent;