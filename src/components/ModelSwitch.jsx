import React from 'react';
import { Switch, 
		Route,
		useLocation } from 'react-router-dom';

import List from './List';
import DetailView from './DetailView';


const ModelSwitch = (props) => {
	const data = props.list;
	const context = props.context;

	const location = useLocation();

	return (
		<div>
			<Switch location={ location }>
				<Route path="/DetailView/:idx">
					<DetailView 
						list={ data }
						context={ context }
					/>
				</Route>
				<Route path='/'>
					<List 
						list={ data }
						context={ context }
					/>
				</Route>
			</Switch>
		</div>
	);
}

export default ModelSwitch;