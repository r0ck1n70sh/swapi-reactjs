import React, { useState, useEffect } from 'react';
import { getAllFromServer } from '../packages/apiCall';
import List from '../components/List';

const People = (props) => { 
    const [ data, setData ] = useState([]);

    useEffect(() => {
        async function fetchAndSetData() {
            setData(await getAllFromServer('people'));
        };
        fetchAndSetData();
    }, []);

    return (
        <div>
           <List list={ data }/> 
        </div>
    );
}

export default People;