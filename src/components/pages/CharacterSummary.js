import React from 'react';

class CharacterSummary extends React.Component {
	render() {
		return (
			<div className='character-summary'>
				<div className='character-summary-image' />
				<div className='character-summary-details-container'>
					<div className='character-summary-details-header'>
						<span className='character-summary-details-header-text'>{this.props.data.name.toUpperCase()}</span>
					</div>
					<div className='character-summary-details-body'>
						<span>{this.props.data.name}</span><span>{this.props.data.rank}</span>
						<span>{this.props.data.status}</span>
						<span>{this.props.data['species.name']}</span><span>{this.props.data.gender}</span>
						<span>{this.props.data.actor}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default CharacterSummary;