import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { getAllFromServer } from '../packages/apiCall';

import Paginator from '../components/Paginator';
import ModelSwitch from '../components/ModelSwitch';


const ContextPage = (props) => {
	const [ data, setData ] = useState([]);
	const [ page, setPage ] = useState(1);
	const [ nextPage, setNextPage ] = useState(false);
	const [ prevPage, setPrevPage ] = useState(false);

	const context = props.context;

	useEffect(() => {
		(async function fetchAndSetData() {
			const { dataList, next, prev } = await getAllFromServer({
				context: context,
				page: page
			});	
			setData( dataList );
			setNextPage( next );
			setPrevPage( prev );
		})();
	}, [ page ]);

	const paginatorEvent = ( event ) => {
		let eventTarget = event.target.name;
		
		if( eventTarget === '+' ) {
			setPage( page => page + 1 );
		} else if( eventTarget === '-' ) {
			setPage( page => page - 1 );
		}
	}

	return (
		<div>
			<Paginator 
				curr={ page }
				next={ nextPage }
				prev={ prevPage }
				onClick={ paginatorEvent }
			/>
			<Router basename={ context }>
				<ModelSwitch
				list={ data }
				context={ context }
			/>
			</Router>
			
		</div>
	)
}

export default ContextPage;