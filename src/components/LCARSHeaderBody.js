import React from 'react';
import { withRouter } from 'react-router-dom';
import PillButton from './PillButton';
import * as LCARSColors from '../utils/LCARSColors';

// TODO: Should redirects be done here, or passed in?
// Header seems pretty specific for auth navigation.

class LCARSHeaderBody extends React.Component {
	login = () => {
		this.props.history.push('/login');
	}

	register = () => {
		this.props.history.push('/register');
	}

	profile = () => {
		this.props.history.push('/profile');
	}

	goHome = () => {
		this.props.history.push('/');
	}

	render() {
		let authButtons = [];
		if (this.props.currentUser) {
			authButtons.push(
				<PillButton
					text='LOG OUT'
					onClick={this.props.logout}
					color={LCARSColors.ORANGE} />);
			authButtons.push(
				<PillButton
					text='PROFILE'
					onClick={this.profile}
					color={LCARSColors.BEIGE} />);
		}
		else {
			authButtons.push(
				<PillButton
					text='LOGIN'
					onClick={this.login}
					color={LCARSColors.ORANGE} />);
			authButtons.push(
				<PillButton
					text='REGISTER'
					onClick={this.register}
					color={LCARSColors.BEIGE} />);
		}
		return(
			<div className='lcars-header-body'>
				<div className='lcars-header-body-title'>
					<span className='lcars-header-body-title-text' style={{ color: LCARSColors.ORANGE }}>LCARS DATABASE ACCESS</span>
				</div>
				<div className='lcars-header-body-lower'>
					<div className='lcars-header-body-deco' />
					<div className='lcars-header-body-nav'>
						{authButtons}

						<PillButton
							text='HOME'
							onClick={this.goHome}
							color={LCARSColors.PURPLE} />
						<PillButton
							text='GNDN'
							onClick={this.goHome}
							color={LCARSColors.REDDISH} />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(LCARSHeaderBody);