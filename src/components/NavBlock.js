import React from 'react';
import { Redirect } from 'react-router';

class NavBlock extends React.Component {
	state = {
		redirect: false
	};

	onClick = event => {
		this.setState({ redirect: true });
	}

	render() {
		if (this.state.redirect) {
			this.setState({ redirect: false });
			return <Redirect push to={this.props.navTarget} />
		}
		
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

export default NavBlock;