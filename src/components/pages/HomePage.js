import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div className='home-page'>
				<span className='home-page-text'>Welcome to the LCARS Star Trek API</span>
				<span className='home-page-text'>This API covers Star Trek eras of The Next Generation (TNG) to Deep Space 9 (DS9)</span>
				<img className='home-page-image' src='https://vignette.wikia.nocookie.net/memoryalpha/images/b/b5/United_Federation_of_Planets_logo.svg/revision/latest?cb=20101031000529&path-prefix=en' alt=''/>
			</div>
		)
	}
}

export default HomePage;