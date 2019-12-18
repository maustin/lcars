import React from 'react';
import { TweenLite } from 'gsap';

class Block extends React.Component {
	render() {
		let style = {
			'gridColumn': this.props.column || 1,
			'gridRow': this.props.row || 1,
			'background': this.props.color || 'gray'
		};

		let text;
			if (this.props.text) {
				text = <span className='lcars-block-text'>{this.props.text}</span>
			}

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
		}

		return (
			<div className='lcars-block' style={style}>
				{text}
			</div>
		)
	}
}

export default Block;