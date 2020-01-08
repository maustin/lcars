import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetail from './pages/CharacterDetail';
import ShipsPage from './pages/ShipsPage';
import SpeciesPage from './pages/SpeciesPage';
import RanksPage from './pages/RanksPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MissingPage from './pages/MissingPage';

class LCARSContentBody extends React.Component {
	render() {
		return (
			<div className='lcars-content-body'>
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route path='/characters' component={ CharactersPage } />
					<Route path='/characterdetail' component={ CharacterDetail } />
					<Route path='/ships' component={ ShipsPage } />
					<Route path='/species' component={ SpeciesPage } />
					<Route path='/ranks' component={ RanksPage } />
					<Route
						path='/login'
						render={(props) => <LoginPage {...props} setCurrentUser={this.props.setCurrentUser}/> }
					/>
					<Route path='/register' component={ RegisterPage } />
					<Route component={ MissingPage } />
				</Switch>
			</div>
		)
	}
}
//<Route path='/login' component={ LoginPage } />

export default LCARSContentBody;