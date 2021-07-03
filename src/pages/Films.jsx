import React, { useState, useEffect } from 'react';
import { getAllFromServer } from '../packages/apiCall';
import FilmCard from '../components/FilmCard';
import List from '../components/List';

const Films = (props) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        async function fetchAndSetData() {
            setData(await getAllFromServer('people'));
        };
        fetchAndSetData();
    }, []);

    return (
        <div>
           <List list={ data } cardComponent={ <FilmCard /> }/> 
        </div>
    )
}

export default Films;