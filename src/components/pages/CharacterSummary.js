import React from 'react';
import { withRouter } from 'react-router-dom';
import * as LCARSColors from '../../utils/LCARSColors';
import * as TextUtils from '../../utils/TextUtils';

class CharacterSummary extends React.Component {
	handleClick = event => {
		this.props.history.push('/characterdetail', { data: this.props.data });
	}

	render() {
		if (this.props.selectedId != null && this.props.selectedId != this.props.data.id) {
			return (<div/>)
		}

		let headerStyle = { background: LCARSColors.PEACH };
		let status = this.props.data.status.toLowerCase();
		if (status.includes('deceased'))
			headerStyle.background = LCARSColors.REDDISH;
		else if (status.includes('missing'))
			headerStyle.background = LCARSColors.PINK;
		else if (status.includes('resigned'))
			headerStyle.background = LCARSColors.PURPLE;

		return (
			<div
				className='character-summary'
				onClick={this.handleClick}>
				<img
					className='character-summary-image'
					src={this.props.data.image}
					alt=''
					onError={(event) => event.target.src = 'placeholder.png'}/>
				<div className='character-summary-details-container'>
					<div className='character-summary-details-header' style={headerStyle}>
						<span 
							className='character-summary-details-header-text'>
							{TextUtils.getNameLastFirst(this.props.data.name).toUpperCase()}
						</span>
					</div>
					<div className='character-summary-details-body'>
						<span
							className='character-summary-details-body-text'
							style={{ fontSize: '38px' }}>
							{this.props.data.name}
						</span>
						<div>
							<span className='character-summary-details-body-prefix'>CURRENT STATUS</span>
							<span className='character-summary-details-body-text'>{this.props.data.status}</span>
						</div>
						<div>
							<span className='character-summary-details-body-prefix'>SPECIES</span>
							<span className='character-summary-details-body-text'>{this.props.data['species.name']}</span>
						</div>
						<div>
							<span className='character-summary-details-body-prefix'>GENDER</span>
							<span className='character-summary-details-body-text'>{TextUtils.getGenderString(this.props.data.gender)}</span>
						</div>
						<div>
							<span className='character-summary-details-body-prefix'>PORTRAYED BY</span>
							<span className='character-summary-details-body-text'>{this.props.data.actor}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
/*
<div>
	<span className='character-summary-details-body-prefix'>RANK</span>
	<span className='character-summary-details-body-text'>{this.props.data.rank}</span>
</div>
*/

export default withRouter(CharacterSummary);