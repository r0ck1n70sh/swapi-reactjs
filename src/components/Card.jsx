import React from "react";

import CardImage from './CardImage';

const Card = (props) => {
    const title = props.title;
	const url = props.url;

    return (
        <div>
            { title }
			<CardImage url={ url } />
        </div>
    );
}

export default Card;