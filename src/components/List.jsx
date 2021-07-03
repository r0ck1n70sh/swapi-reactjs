import React from 'react';
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
                <Card
					title={ element[attr] }
					url={ element.url }
				/>
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