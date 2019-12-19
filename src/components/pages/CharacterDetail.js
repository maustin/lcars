import React from 'react';

class CharacterDetail extends React.Component {
	render() {
		console.log("DETAIL", this.props.location.state.data);

		return (
			<div>
			<h2>Character Detail</h2>
			{ this.props.location.state.data.name }
			</div>
		)
	}
}

export default CharacterDetail;