import React from 'react';
import '../styles/MPbuttons.css';
import AnimalImage from '../components/AnimalImage'

function MatchPage(){
    return(
        <div id="matchPage">
            <h1>MatchPage</h1>
            <AnimalImage image={'/images/dog1.jpg'} altText={"chow chow"}/>
            <div class="buttonGroup">
                <button class="mp-button" id="green">YES</button>
                <button class="mp-button" id="red">NO</button>
            </div>
        </div>
    )
}

export default MatchPage;
