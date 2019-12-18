import React from 'react';

class Button2 extends React.Component {
	render() {
		let style = {
			'background': this.props.color
		};

		return(
			<div>
				<div className='lcars-pill-button' style={style}>
					<span className='lcars-pill-button-text'>{this.props.text}</span>
				</div>
			</div>
		)
	}
}

export default Button2;