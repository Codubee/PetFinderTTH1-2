import React from 'react';
import AnimalImage from '../components/AnimalImage'

function MatchPage(){
    return(
        <div id="matchPage">
            <h1>MatchPage</h1>
            <AnimalImage image={'/images/dog1.jpg'} altText={"chow chow"}/>
        </div>
    )
}

export default MatchPage;
