import React from 'react';
import GlitchSlice from '../GlitchSlice';

class MissingPage extends React.Component {
	render() {
		let images = [];
		for (let i = 0; i < 16; i++) {
			let num = i < 10 ? "0" + i.toString() : i.toString();
			images.push(<GlitchSlice key={num} num={num}/>);
		}

		return (
			<div className='home-page'>
				<span className='missing-page-notice'>404</span>
				<span className='home-page-text' style={{ marginBottom: '30px' }}>RESOURCE NOT FOUND</span>
				{ images }
			</div>
		)
	}
}

export default MissingPage;