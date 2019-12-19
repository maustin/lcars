import React from 'react';
import * as TextUtils from '../utils/TextUtils';
//import * as LCARSColors from '../../utils/LCARSColors';

class BlockButton extends React.Component {
	onClick = event => {
		//
	}

	render() {
		let baseStyle = {
			'background': this.props.baseColor || 'gray'
		};

		let textStyle = {
			'color': this.props.textColor || 'pink'
		}

		let tabStyle = {
			'background': this.props.tabColor || 'gray'
		}

		return (
			<div className='block-button' onClick={this.onClick} >
				<div className='block-button-tab' style={tabStyle} />
				<div className='block-button-numbers' style={textStyle} >
					{TextUtils.getRandomNumberFill('xxx')}
				</div>
				<div className='block-button-base' style={baseStyle} >
					<div className='block-button-text'>
						{this.props.text}
					</div>
				</div>
			</div>
		)
	}
}

export default BlockButton;