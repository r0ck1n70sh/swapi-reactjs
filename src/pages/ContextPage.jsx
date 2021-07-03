import React, { useState, useEffect } from 'react';
import { getAllFromServer } from '../packages/apiCall';
import List from '../components/List';

const ContextPage = (props) => {
	const [ data, setData ] = useState([]);
	const context = props.context;

	useEffect(() => {
		(async function fetchAndSetData() {
			setData(await getAllFromServer(context));	
		})();
	}, []);

	return (
		<div>
			<List list={ data } context={ context } />
		</div>
	)
}

export default ContextPage;