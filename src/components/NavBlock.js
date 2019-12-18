import React from 'react';

class NavBlock extends React.Component {
	render() {
		let style = {
			'background': this.props.color || 'gray'
		};

		let text;
		if (this.props.text) {
			text = <span className='lcars-navblock-text'>{this.props.text}</span>
		}

		return (
			<div className='lcars-navblock' style={style}>
				{text}
			</div>
		)
	}
}

export default NavBlock;