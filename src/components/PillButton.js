import React from 'react';

class Button2 extends React.Component {
	render() {
		let style = {
			'background': this.props.color
		};

		return(
			<div className='lcars-pill-button' style={style} />
		)
	}
}

export default Button2;