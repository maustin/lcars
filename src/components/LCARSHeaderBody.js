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

	render() {
		return(
			<div className='lcars-header-body'>
				<div className='lcars-header-body-title'>
					<span className='lcars-header-body-title-text' style={{ color: LCARSColors.ORANGE }}>LCARS DATABASE ACCESS</span>
				</div>
				<div className='lcars-header-body-lower'>
					<div className='lcars-header-body-deco' />
					<div className='lcars-header-body-nav'>
						<PillButton
							text='LOGIN'
							onClick={this.login}
							color={LCARSColors.ORANGE} />
						<PillButton
							text='REGISTER'
							onClick={this.register}
							color={LCARSColors.BEIGE} />
						<PillButton
							text='LOG OUT'
							onClick={this.props.logout}
							color={LCARSColors.PURPLE} />
						<PillButton
							text='PROFILE'
							onClick={this.profile}
							color={LCARSColors.REDDISH} />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(LCARSHeaderBody);