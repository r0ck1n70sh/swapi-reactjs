import { useState, useEffect } from 'react';
import { getPeopleFromServer } from '../packages/apiCall';
import PeopleList from '../components/PeopleList';

const People = (props) => { 
    const [ data, setData ] = useState([]);

    useEffect(() => {
        async function fetchAndSetData() {
            setData(await getPeopleFromServer());
        };
        fetchAndSetData();
    }, []);

    return (
        <div>
           <PeopleList list={ data }/> 
        </div>
    )
}

export default People;