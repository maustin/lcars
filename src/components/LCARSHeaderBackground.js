import React from 'react'
import * as LCARSColors from '../utils/LCARSColors';
import ElbowLeftBottom from './ElbowLeftBottom';
import Block from './Block';

class LCARSHeaderBackground extends React.Component {
	render() {
		return (
			<div className='lcars-header-background'>
				<Block
					row='1/1'
					column='1/1'
					text='LCARS SEI-6'
					color={LCARSColors.PINK}
					blockStyle='padBottom' />
				<ElbowLeftBottom row='2/3' column='1/2' color={LCARSColors.PURPLE} />
				<Block row='3/3' column='3/4' color={LCARSColors.PURPLE} />
				<Block row='3/3' column='4/5' color={LCARSColors.ORANGE} blockStyle='padLeft square' />
				<Block row='3/3' column='5/6' color={LCARSColors.PINK} blockStyle='padLeft' />
				<Block row='3/3' column='6/7' color={LCARSColors.PINK} blockStyle='padLeft' />
			</div>
		)
	}
}

export default LCARSHeaderBackground;
// halfheight