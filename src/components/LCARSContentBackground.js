import React from 'react';
import * as LCARSColors from '../utils/LCARSColors';
import ElbowLeftTop from './ElbowLeftTop';
import Block from './Block';
import NavBlock from './NavBlock';

class LCARSContentBackground extends React.Component {
	render() {
		let navTargets = this.props.navTargets;

		return (
			<div className='lcars-content-background'>
				<ElbowLeftTop row='1/2' column='1/2' color={LCARSColors.REDDISH} />
				<Block row='1/2' column='3/4' color={LCARSColors.REDDISH} />
				<Block row='1/2' column='4/5' color={LCARSColors.ORANGE} blockStyle='padLeft square' />
				<Block row='1/2' column='5/6' color={LCARSColors.ORANGE} blockStyle='padLeft halfheight' />
				<Block row='1/2' column='6/7' color={LCARSColors.PINK} blockStyle='padLeft' />
				<div className='lcars-content-nav'>
					<NavBlock
						navTarget={navTargets.characters}
						text='CHARACTERS'
						color={LCARSColors.BEIGE} />
					<NavBlock
						navTarget={navTargets.ships}
						text='SHIPS'
						color={LCARSColors.ORANGE} />
					<NavBlock
						navTarget={navTargets.species}
						text='SPECIES'
						color={LCARSColors.PURPLE} />
					<NavBlock
						navTarget={navTargets.ranks}
						text='RANKS'
						color={LCARSColors.PEACH} />
				</div>
				<Block text='03-041980' row='4/5' column='1/2' color={LCARSColors.ORANGE} blockStyle='padTop' />
				<Block text='86-753090' row='5/6' column='1/2' color={LCARSColors.ORANGE} blockStyle='padTop minH200 textTop' />
			</div>
		)
	}
}

export default LCARSContentBackground;