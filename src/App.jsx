import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './shared/header/header';
import Home from './pages/home/home';
import Team from './pages/team/team';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Route exact path='/' component={Home} />
				<Route path='/:id' component={Team} />
			</div>
		</BrowserRouter>
	);
}

export default App;
