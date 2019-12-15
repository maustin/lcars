import React from 'react';
import Block from './Block';
//import { TweenLite } from 'gsap';

class PillButton extends React.Component {
	render() {
		let style = {
			'display': 'grid',
			'gridTemplateColumns': '30px auto 30px',
			//'height': '45px'
			width: '100px'
		}

		let leftCapStyle = {
			'gridColumn': '1/2'
		};

		let rightCapStyle = {
			'gridColumn': '3/4'
		}

		let block = {
			'gridColumn': '2/3',
			'background': 'red',
		}

		/*let style = {
			'gridColumn': this.props.column,
			'gridRow': this.props.row,
			'background': this.props.color
		};

		if (this.props.blockStyle) {
			if (this.props.blockStyle.includes('padLeft')) {
				style['marginLeft'] = '5px';
			}
			if (this.props.blockStyle.includes('padBottom')) {
				style['marginBottom'] = '5px';
			}
			if (this.props.blockStyle.includes('square')) {
				//
			}
			if (this.props.blockStyle.includes('halfheight')) {
				style.height = '8px';
			}
		}*/

		return (
			<div style={style}>
				<svg style={leftCapStyle} viewBox="0 0 45 30" preserveAspectRatio="none">
					<path d="M15 30h30V0H15a15 15 0 0 0 0 30z" fill="gray"/>
				</svg>
				<div style={block}>
					
				</div>
				<svg style={rightCapStyle} viewBox="0 0 45 30" preserveAspectRatio="none">
					<path d="M30 0H0v30h30a15 15 0 0 0 0-30z" fill="gray"/>
				</svg>
			</div>
		)
	}
}
//<Block column='2/2' color='blue' />

export default PillButton;