import React from 'react';
import AnimalImage from '../components/AnimalImage'

var animalImageArray = [
    {
        src: '/images/dog1.jpg',
        altText: 'Chow Chow lying down'
    },
    {
        src: '/images/dog2.jpg',
        altText: 'Chow Chow looking over a wall'
    },
    {
        src: '/images/dog3.jpg',
        altText: 'Chow Chow in the park'
    }
];

function MatchPage(){
    return(
        <div>
            <h1>MatchPage</h1>
            <div>
                <AnimalImage images={animalImageArray}/>
            </div>
        </div>
    )
}

export default MatchPage;
