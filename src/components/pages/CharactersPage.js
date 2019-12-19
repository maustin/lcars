import React from 'react';
import * as LCARSColors from '../../utils/LCARSColors';
import CharacterModel from '../../models/CharacterModel';
import CharacterSummary from './CharacterSummary';
import CharacterDetail from './CharacterDetail';
import ElbowLeftTop from '../ElbowLeftTop';
import Block from '../Block';

class CharactersPage extends React.Component {
	state = {
		characters: [],
		selectedId: null
	}

	getAll = () => {
		CharacterModel.all().then(res => {
			//console.log(res);
			this.setState({ characters: res });
		})
	}

	handleSelect = selectedId => {
		//console.log("selectedId", selectedId);
		this.setState({ selectedId: selectedId });
	}

	componentDidMount() {
		this.getAll();
	}

	render() {
		if (!this.state.characters)
			return <h1>ERROR</h1>

		// Two states: all, single
		let characters = this.state.characters.map(item =>
			<CharacterSummary
				key={item.id}
				data={item}
				selectedId={this.state.selectedId}
				handleSelect={this.handleSelect} />
		);


		return (
			<div className='character-page'>
				<div className='character-page-header'>
					<ElbowLeftTop
						skinny
						row='1/3'
						column='1/2'
						color={LCARSColors.BEIGE} />
					<Block
						row='1/2'
						column='2/3'
						color={LCARSColors.BEIGE}
						blockStyle='padRight' />
					<span
						className='character-page-header-text'
						style={{ color: LCARSColors.ORANGE }}>
						CHARACTERS
					</span>
				</div>
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