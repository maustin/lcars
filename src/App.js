import React from 'react';
import { withRouter } from 'react-router-dom';
import LCARSHeader from './containers/LCARSHeader';
import LCARSContent from './containers/LCARSContent';

class App extends React.Component {
	state = {
		currentUser: localStorage.getItem('uid')
	}

	setCurrentUser = token => {
		this.setState({ currentUser: token });
		localStorage.setItem('uid', token);
		console.log('I HAVE A USER TOKEN:', token);
	}

	logout = () => {
		localStorage.removeItem('uid');
		this.setState({ currentUser: null });
		this.props.history.push('/');
	}

	render() {
		return (
	    <div className='app'>
	      <LCARSHeader
	      	currentUser={this.state.currentUser}
	      	logout={this.logout} />
	      <LCARSContent
	      	currentUser={this.state.currentUser}
	      	setCurrentUser={this.setCurrentUser} />
	    </div>
	  );
	}
}

export default withRouter(App);