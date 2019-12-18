import React from 'react';
import PillButton from './PillButton';
import * as LCARSColors from '../utils/LCARSColors';

class LCARSHeaderBody extends React.Component {
	render() {
		return(
			<div className='lcars-header-body'>
				<div className='lcars-header-body-title'>
					<span className='lcars-header-body-title-text' style={{ color: LCARSColors.ORANGE }}>LCARS DATABASE ACCESS</span>
				</div>
				<div className='lcars-header-body-lower'>
					<div className='lcars-header-body-deco' />
					<div className='lcars-header-body-nav'>
						<PillButton text='LOGIN' color={LCARSColors.ORANGE} />
						<PillButton text='PROFILE' color={LCARSColors.BEIGE} />
						<PillButton text='FIZZ' color={LCARSColors.PURPLE} />
						<PillButton text='BANG' color={LCARSColors.REDDISH} />
					</div>
				</div>
			</div>
		)
	}
}

export default LCARSHeaderBody;