import React, { useState, useEffect } from 'react';
import URLList from './URLList';
import CardImage from './CardImage';
import { getAttributeFromURL } from '../packages/apiCall';
import './PeopleCard.css';

const PeopleCard = (props) => {
    const { 
        name,
        birth_year,
        eye_color,
        gender,
        hair_color,
        height,
        mass,
        skin_color,
        homeworld,
        films,
        species,
        starships,
        vehicles,
        url,
        created,
        edited
    } = props.data;

    const [speciesType, setSpeciesType] = useState('');

    useEffect(() => {
        async function getAndSetSpeciesType(){
            setSpeciesType(await getAttributeFromURL(species, 'name'));
        };
        getAndSetSpeciesType();
    })


    return (
        <div className='card'>
            <div><CardImage speciesType={ speciesType } /></div>
            <div><h3>name: { name }</h3></div>
            <div><h4>birth_year: { birth_year }</h4></div>
            <div><h4>eye_color: { eye_color }</h4></div>
            <div><h4>gender: { gender }</h4></div>
            <div><h4>hair_color: { hair_color }</h4></div>
            <div><h4>height: { height }</h4></div>
            <div><h4>mass: { mass }</h4></div>
            <div><h4>skin_color: { skin_color }</h4></div>
            <div><h4>homeworld: <URLList data={ [ homeworld ] } /></h4></div>
            <div><h4>films: <URLList data={ films } /></h4></div>
            <div><h4>species: <URLList data = { species } /></h4></div>
            <div><h4>starships: <URLList data={ starships } /></h4></div>
            <div><h4>vehicles: <URLList data={ vehicles } /></h4></div>
            <div><h4>url: <URLList data={ [ url ] } /></h4></div>
            <div><h4>created: { created }</h4></div>
            <div><h4>edited: { edited }</h4></div>
        </div>
    )
}

export default PeopleCard;