import React from 'react';
import { API_URL } from '../../constants';
import * as LCARSColors from '../../utils/LCARSColors';
import BlockButton from '../BlockButton';

class LoginPage extends React.Component {
	state = {
		errors: null,
		submitted: false,
		email: '',
		password: '',
		error: ''
	}

	//emailRef = React.createRef();
	//passRef = React.createRef();

	onSubmitClick = event => {
		event.preventDefault();
		this.setState({ submitted: true });
		let user = {
			email: this.state.email,
			password: this.state.password
		};

		fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(data => {
			console.log('LOGIN SUCCESS', data);
			this.props.setCurrentUser(data.signedJwt);
			// TODO: send to... home? Profile?
			this.props.history.push('/');
		})
		.catch(err => {
			console.log('LOGIN ERROR:', err);
			this.setState({ submitted: false, error: err });
		});
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
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

				<h5>Email</h5>
				<input
					type='email'
					name='email'
					className='text-input'
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="picard@example.com" />

				<h5>Password</h5>
				<input
					type='password'
					name='password'
					className='text-input'
					value={this.state.password}
					onChange={this.handleChange} />

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