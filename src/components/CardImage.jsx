import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'

const CardImage = (props) => {
    const speciesType = props.speciesType;
    const [icon, setIcon] = useState('');
    

    useEffect(() => {
        if(speciesType === 'Droid'){
            setIcon('fa fa-android');
        } else if(speciesType === 'Human') {
            setIcon('fa fa-user-circle-o')
        } else {
            setIcon('fa fa-question-circle')
        }
    }, [speciesType]);

    return (
        <div>
            <i className={ icon }></i>
        </div>
    );
}

export default CardImage;