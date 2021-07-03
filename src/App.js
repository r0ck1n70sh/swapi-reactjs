import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
} from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';

import Logo from './components/Logo'

import './App.css';

const TITLE = 'Star Wars Wiki'

const App = () => {
  useEffect(() => {
    document.title = TITLE;
  }, []);


  return (
    <Router>
      <div className='logo'>
        <Link to='/'><Logo/></Link>
      </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/films'>FILMS</Link>
            </li>
            <li>
              <Link to='/people'>PEOPLE</Link>
            </li>
            <li>
              <Link to='/planets'>PLANETS</Link>
            </li>
            <li>
              <Link to='/species'>SPECIES</Link>
            </li>
            <li>
              <Link to='/vehicles'>VEHICLES</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path='/films'>
              <Films />
            </Route>
            <Route path='/people'>
              <People /> 
            </Route>
            <Route path='/planets'>
              <Planets />
            </Route>
            <Route path='/species'>
              <Species />
            </Route>
            <Route path='/vehicles'>
              <Vehicles />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
