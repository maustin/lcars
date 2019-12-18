import React from 'react';
import { TweenLite } from 'gsap';
import * as LCARSColors from '../utils/LCARSColors';

class ElbowLeftBottom extends React.Component {
	render() {
		let style = {
			gridColumn: this.props.column || 1,
			gridRow: this.props.row || 1
		};

		let fillColor = this.props.color || 'gray';

		return (
			<div style={style}>
				<svg className='elbow-left-bottom' viewBox="0 0 300 90" preserveAspectRatio="none">
					<path
						d="M 150,90 H 75 C 33.58,90 0,56.61 0,15.41 V 0 H 150 V 36.87 C 150.07152,57.491367 166.87851,74 187.5,74 H 300 v 16 z"
						fill={fillColor}/>
				</svg>
			</div>
		)
	}
}

export default ElbowLeftBottom;