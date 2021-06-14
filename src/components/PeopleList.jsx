import PeopleCard from './PeopleCard';
import './PeopleList.css';

const PeopleList = (props) => {
    let list = props.list;

    let cardList = list.map((element) => {
        return (
            <div key = { element.name }>
                <PeopleCard data = { element } />
            </div>
        )
    });

    return (
        <div className='wrapper'>
            { cardList }
        </div>
    );
}

export default PeopleList;