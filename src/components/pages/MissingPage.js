import React from 'react';

class MissingPage extends React.Component {
	render() {
		return (
			<div className='home-page'>
				<span className='missing-page-notice'>404</span>
				<span className='home-page-text'>RESOURCE NOT FOUND</span>
				<img className='home-page-image' src='https://vignette.wikia.nocookie.net/memoryalpha/images/b/b5/United_Federation_of_Planets_logo.svg/revision/latest?cb=20101031000529&path-prefix=en' alt=''/>
			</div>
		)
	}
}

export default MissingPage;