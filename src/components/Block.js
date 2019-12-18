import React from 'react';
import { TweenLite } from 'gsap';

class Block extends React.Component {
	render() {
		let style = {
			'gridColumn': this.props.column || 1,
			'gridRow': this.props.row || 1,
			'background': this.props.color || 'gray'
		};
		let textStyles = 'lcars-block-text';

		if (this.props.blockStyle) {
			if (this.props.blockStyle.includes('padLeft')) {
				style['marginLeft'] = '5px';
			}
			if (this.props.blockStyle.includes('padBottom')) {
				style['marginBottom'] = '5px';
			}
			if (this.props.blockStyle.includes('padTop')) {
				style['marginTop'] = '5px';
			}
			if (this.props.blockStyle.includes('square')) {
				//
			}
			if (this.props.blockStyle.includes('halfheight')) {
				style.height = '8px';
			}
			if (this.props.blockStyle.includes('minH')) {
				let minH = this.props.blockStyle.indexOf('minH');
				let nextSpace = this.props.blockStyle.indexOf(' ', minH);
				let minHeight;
				if (nextSpace !== -1) 
					minHeight = this.props.blockStyle.substring(minH + 4, nextSpace);
				else 
					minHeight = this.props.blockStyle.substring(minH + 4);

				style.minHeight = minHeight + 'px';
			}
			if (this.props.blockStyle.includes('textTop')) {
				textStyles += ' lcars-block-text-top';
			}
		}

		let text;
		if (this.props.text) {
			text = <span className={textStyles}>{this.props.text}</span>
		}

		return (
			<div className='lcars-block' style={style}>
				{text}
			</div>
		)
	}
}

export default Block;