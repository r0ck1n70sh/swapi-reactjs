import React from 'react';
import Card from './Card';
import './List.css';

const List = (props) => {
    let list = props.list;

    let cardList = list.map((element, idx) => {
        return (
            <div key = { idx }>
                <Card data={ element } />
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