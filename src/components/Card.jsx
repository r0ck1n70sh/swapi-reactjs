import { useEffect, useState } from "react";
import { isURL } from "is-url";

import URLList from "./URLList";

const Card = (props) => {
    const data = props.data;
    const [ attr, setAttr ] = useState([]);

    useEffect(() => {
        let listAttr = [];
        for( const prop in data ){
            let  propData;
            if( Array.isArray( data[prop] ) ){
                propData = (
                    <span>
                        <URLList data={ data[prop]} />
                    </span> 
                 );
            } else if(isURL( data[prop] )) {
                propData = ( 
                    <span>
                        <URLList data={ [ data[prop] ] } />
                    </span>
                 );
            } else {
               propData = (
                   <span>
                        <URLList data={ data[prop] } />
                   </span> 
               );
            }

            let element = (
                <div>
                    <h4>
                        { prop }: { propData }
                    </h4>
                </div>
            );

            listAttr.push(element);
        }
        setAttr(listAttr);
    }, [data]);

    return (
        <div>
            { attr }
        </div>
    );
}

export default Card;