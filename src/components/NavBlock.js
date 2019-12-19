import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBlock extends React.Component {
	onClick = event => {
		this.props.history.push(this.props.navTarget);
	}

	render() {
		let style = {
			'background': this.props.color || 'gray'
		};

		let text;
		if (this.props.text) {
			text = <span className='lcars-navblock-text'>{this.props.text}</span>
		}

		return (
			<div className='lcars-navblock' style={style} onClick={this.onClick} >
				{text}
			</div>
		)
	}
}

export default withRouter(NavBlock);