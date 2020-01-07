import React from 'react';
import * as LCARSColors from '../../utils/LCARSColors';
import BlockButton from '../BlockButton';

class LoginPage extends React.Component {
	state = {
		errors: null,
		submitted: false
	}

	emailRef = React.createRef();
	passRef = React.createRef();

	onSubmitClick = event => {
		event.preventDefault();
		this.setState({ submitted: true });
		
	}

	render() {
		let pageStyle = {};
		if (this.state.submitted) {
			pageStyle.pointerEvents = 'none';
			pageStyle.opacity = 0.5;
		}

		return (
			<div style={pageStyle}>
				<h2>Login</h2>

				<h6>Email</h6>
				<input
					ref={this.emailRef}
					type='text'
					name='email'
					className='text-input'
					required />

				<h6>Password</h6>
				<input
					ref={this.passRef}
					type='password'
					name='password'
					className='text-input'
					required />

				<BlockButton
					text='SUBMIT'
					onClick={this.onSubmitClick}
					baseColor={LCARSColors.ORANGE}
					textColor='#000'
					tabColor='#000' />
			</div>
		)
	}
}

export default LoginPage;