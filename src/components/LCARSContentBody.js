import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import ShipsPage from './pages/ShipsPage';
import SpeciesPage from './pages/SpeciesPage';
import RanksPage from './pages/RanksPage';

class LCARSContentBody extends React.Component {
	render() {
		return (
			<div className='lcars-content-body'>
				<Switch>
					<Route path='/characters' component={ CharactersPage } />
					<Route path='/ships' component={ ShipsPage } />
					<Route path='/species' component={ SpeciesPage } />
					<Route path='/ranks' component={ RanksPage } />
				</Switch>
			</div>
		)
	}
}

export default LCARSContentBody;