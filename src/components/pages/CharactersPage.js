import React from 'react';
import CharacterModel from '../../models/CharacterModel';
import CharacterSummary from './CharacterSummary';
import CharacterDetail from './CharacterDetail';

class CharactersPage extends React.Component {
	state = {
		characters: []
	}

	getAll = () => {
		CharacterModel.all().then(res => {
			console.log(res);
			this.setState({ characters: res });
		})
	}

	componentDidMount() {
		this.getAll();
	}

	render() {

		// Two states: all, single
		let characters = this.state.characters.map(item =>
			<CharacterSummary key={item.id} data={item} />
		);


		return (
			<div className='character-page'>
				<div className='character-page-header'>CHARACTERS</div>
				<div className='character-page-scrollview'>
					{ characters }
				</div>
			</div>
		)
	}
}
/*
<div className='character-page-scrollview'>
					{ characters }
				</div>
*/

export default CharactersPage;