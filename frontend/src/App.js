import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Landing from './components/Landing';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import TodoPage from './components/TodoPage';
import RegisterPage from './components/RegisterPage';

import 'bootswatch/dist/flatly/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Nav />
				</header>
				<main className={'jumbotron'}>
					<Switch>
						<Route exact path='/' component={TodoPage} />
						<Route exact path='/Login' component={LoginPage} />
						<Route exact path='/todo' component={TodoPage} />
						<Route exact path='/register' component={RegisterPage} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
