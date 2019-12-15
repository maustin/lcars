import React from 'react';
//import PillButton from './PillButton';
import PillButton from './PillButton';
import * as LCARSColors from '../utils/LCARSColors';

class LCARSHeaderBody extends React.Component {
	render() {
		return(
			<div className='lcars-header-body'>
				<div className='lcars-header-body-title' />
				<div className='lcars-header-body-lower'>
					<div className='lcars-header-body-deco' />
					<div className='lcars-header-body-nav'>
						<PillButton text='Login' color={LCARSColors.ORANGE} />
						<PillButton text='Profile' color={LCARSColors.BEIGE} />
						<PillButton text='Fizz' color={LCARSColors.PURPLE} />
						<PillButton text='Bang' color={LCARSColors.REDDISH} />
					</div>
				</div>
			</div>
		)
	}
}

export default LCARSHeaderBody;