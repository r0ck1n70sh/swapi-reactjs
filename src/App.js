import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
} from 'react-router-dom';

import Home from './pages/Home';
import ContextPage from './pages/ContextPage';

import Logo from './components/Logo'

import './App.css';

const TITLE = 'Star Wars Wiki'
const PAGES = [
	'films',
	'people',
	'planets',
	'species',
	'vehicles'
]

const App = () => {
	useEffect(() => {
		document.title = TITLE;
	}, []);

	let linkList = PAGES.map((element) => {
		return (
			<div key={ element }>
				<Link to={ `/${ element }` }>
					{ element.toUpperCase() }
				</Link>
			</div>
		)
	});

	let routeList = PAGES.map((element) => {
		return (
				<Route path={ `/${ element }` } key={ element }>
					<ContextPage context={element} />
				</Route>
		)
	});

  return (
    <Router>
      <div className='logo'>
        <Link to='/'><Logo/></Link>
      </div>
        <nav>
			<div>
				<Link to="/">
					HOME
				</Link>
			</div>
			{ linkList }
        </nav>
        <Switch>
			{ routeList }
			<Route path="/">
				<Home />
			</Route>
          </Switch>
        </Router>
  );
}

export default App;
