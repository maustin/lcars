import React from 'react';
import { TweenLite } from 'gsap';
import * as LCARSColors from '../utils/LCARSColors';

class ElbowLeftBottom extends React.Component {
	render() {
		let fillColor = 'gray';
		if (this.props.color)
			fillColor = this.props.color;

		return (
			<div className='elbow-left-bottom-container'>
				<svg className='elbow-left-bottom' viewBox="0 0 300 90" preserveAspectRatio="none">
					<path
						d="m150 90h-75c-41.42 0-75-33.39-75-74.59v-15.41h150v36.081c0.0715 20.621 16.879 37.263 37.5 37.13h112.5v16.789z"
						fill={fillColor}/>
				</svg>
			</div>
		)
	}
}

export default ElbowLeftBottom;