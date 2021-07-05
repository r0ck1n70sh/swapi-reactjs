import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './List.css';

const List = (props) => {
	const context = props.context; 
    let list = props.list;

    let cardList = list.map((element, idx) => {
		let attr = 'name';
		if(context === 'films')
			attr = 'title';

        return (
            <div key = { idx }>
				<Link to={ `/DetailView/${idx}` }>
					<Card
						title={ element[attr] }
						url={ element.url }
					/>
				</Link>
            </div>
        )
    });

    return (
        <div className='wrapper'>
            { cardList }
        </div>
    );
}

export default List;