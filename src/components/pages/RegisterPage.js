import React from 'react';
import { API_URL } from '../../constants';
import * as LCARSColors from '../../utils/LCARSColors';
import BlockButton from '../BlockButton';

class RegisterPage extends React.Component {
	state = {
		submitted: false,
		email: '',
		username: '',
		password: '',
		password2: '',
		error: ''
	}

	onSubmitClick = event => {
		event.preventDefault();

		let newUser = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		fetch(`${API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
		.then(res => res.json())
		.then(data => {
			console.log('REGISTER SUCCESS', data);
			this.props.history.push('/login');
		})
		.catch(err => {
			console.log('REGISTER ERROR', err);
			this.setState({ submitted: false, error: err });
		})
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
				<h2>Register</h2>

				<h5>Username</h5>
				<h6>This is your public-facing name.</h6>
				<input
					type='text'
					name='username'
					className='text-input'
					value={this.state.username}
					onChange={this.handleChange} />

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

				<h5>Re-Enter Password</h5>
				<input
					type='password'
					name='password2'
					className='text-input'
					value={this.state.password2}
					onChange={this.handleChange} />

				<BlockButton
					text='SUBMIT'
					onClick={this.onSubmitClick}
					baseColor={LCARSColors.ORANGE}
					textColor='#000'
					tabColor='#000' />

			</div>
		);
	}
}

export default RegisterPage;