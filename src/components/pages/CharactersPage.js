import React from 'react';
import CharacterModel from '../../models/CharacterModel';
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
		let characters = this.state.characters.map(item =>
			<p>{item.name}</p>
		);


		return (
			<div>
				<h1 style={{ color: 'red' }}>Characters</h1>
				{ characters }
			</div>
		)
	}
}

export default CharactersPage;