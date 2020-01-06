import React from 'react';

class Button2 extends React.Component {
	onClick = event => {
		if (this.props.onClick)
			this.props.onClick(event);
	}

	render() {
		let style = {
			'background': this.props.color
		};

		return(
			<div onClick={this.onClick}>
				<div className='lcars-pill-button' style={style}>
					<span className='lcars-pill-button-text'>{this.props.text}</span>
				</div>
			</div>
		)
	}
}

export default Button2;