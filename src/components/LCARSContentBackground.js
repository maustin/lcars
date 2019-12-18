import React from 'react';
import * as LCARSColors from '../utils/LCARSColors';
import ElbowLeftTop from './ElbowLeftTop';
import Block from './Block';
import NavBlock from './NavBlock';

class LCARSContentBackground extends React.Component {
	render() {
		return (
			<div className='lcars-content-background'>
				<ElbowLeftTop row='1/2' column='1/2' color={LCARSColors.REDDISH} />
				<Block row='1/2' column='3/4' color={LCARSColors.REDDISH} />
				<Block row='1/2' column='4/5' color={LCARSColors.ORANGE} blockStyle='padLeft square' />
				<Block row='1/2' column='5/6' color={LCARSColors.ORANGE} blockStyle='padLeft halfheight' />
				<Block row='1/2' column='6/7' color={LCARSColors.PINK} blockStyle='padLeft' />
				<div className='lcars-content-nav'>
					<NavBlock text='CHARACTERS' color={LCARSColors.BEIGE} blockStyle='' />
					<NavBlock text='SHIPS' color={LCARSColors.PEACH} blockStyle='' />
					<NavBlock text='SPECIES' color={LCARSColors.ORANGE} blockStyle='' />
					<NavBlock text='RANKS' color={LCARSColors.PURPLE} blockStyle='' />
				</div>
				<Block row='4/5' column='1/2' color={LCARSColors.ORANGE} />
			</div>
		)
	}
}
/*
<Block text='CHARACTERS' />
					<Block text='SHIP' />
					<Block text='SPECIES' />
					<Block text='RANKS' />
					<h3 style={{color: 'red'}}>DERP</h3>
*/

export default LCARSContentBackground;