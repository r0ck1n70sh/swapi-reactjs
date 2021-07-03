import React, { useState, useEffect } from 'react';
import { getImageURLFromItemURL } from '../packages/imageApi';

import 'font-awesome/css/font-awesome.min.css'

const CardImage = (props) => {
	const itemURL = props.url;
	const [ imageURL, setImageURL ] = useState('');

	useEffect(() => {
		setImageURL( getImageURLFromItemURL(itemURL) );
	});

    return (
        <div>
			<img src={ imageURL } alt={ imageURL }/>
        </div>
    );
}

export default CardImage;