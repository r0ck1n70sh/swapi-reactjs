import React from 'react'
import { Link } from 'react-router-dom';
import { getAttributeFromURL } from '../packages/apiCall';


const URLList = (props) => {
    let data = props.data;
    let list = data.map( async (urlString, idx) => {
		let attrName = getAttributeNamesake(urlString);
		let name = await getAttributeFromURL({
			url: urlString,
			attribute: attrName
		});

		return (
			<div key={ idx }>
				<Link to={`/DetailView/999`}>
					{ name }
				</Link>
			</div>
		)
    });

    return (
        <div>
            {list}
        </div>
    );
}

export default URLList;