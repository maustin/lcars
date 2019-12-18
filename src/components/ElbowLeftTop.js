import React from 'react';
import { TweenLite } from 'gsap';
import * as LCARSColors from '../utils/LCARSColors';

class ElbowLeftTop extends React.Component {
	render() {
		let style = {
			gridColumn: this.props.column || 1,
			gridRow: this.props.row || 1
		};

		let fillColor = this.props.color || 'gray';

		return (
			<div style={style}>
				<svg className='elbow-left-top' viewBox="0 0 300 90" preserveAspectRatio="none">
					<path
						d="M 150,0 H 75 C 33.58,0 0,33.39 0,74.59 V 90 H 150 V 53.13 C 150.07152,32.508633 166.87894,15.867048 187.5,16 H 300 V 0 Z"
						fill={fillColor}/>
				</svg>
			</div>
		)
	}
}

export default ElbowLeftTop;