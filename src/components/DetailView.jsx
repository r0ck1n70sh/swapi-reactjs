import React from 'react';
import { useParams } from 'react-router-dom';
import isURL from 'is-url';

import CardImage from './CardImage';
import URLList from './URLList';
import NotFound from './NotFound';


const DetailView = (props) => {
	const dataList = props.list;

	const { idx } = useParams();
	const obj = props.data || dataList[ parseInt(idx, 10) ];

	if( obj === undefined ){
		return (
			<div>
				<NotFound />
			</div>
		)
	}

	const detailCard = () => {
		let attrList = [];
		for( let key in obj ){
			let attr = obj[key];
			
			if( Array.isArray( attr )) {
				attr = (
					<URLList data = { attr } />
				);
			}
			else if( isURL( attr ) ) {
				attr = (
					<URLList data = { [ attr ] } />
				);
			}

			let keyDiv = (
				<div key={ key }>
					{ key }: { attr }
				</div>
			);
			attrList.push( keyDiv );
		}
		return attrList;
	}	


	return (
		<div>
			<CardImage url= { obj["url"] } />
			{ detailCard() }
		</div>
	)
}

export default DetailView;