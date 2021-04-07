import React from 'react';
import '../styles/MPbuttons.css';

function MatchPage(){
    return(
        <div>
            <h1>MatchPage</h1>
            <div class="buttonGroup">
                <button class="mp-button" id="green">YES</button>
                <button class="mp-button" id="red">NO</button>
            </div>
        </div>
    )
}

export default MatchPage;
