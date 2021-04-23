import '../styles/Explanation.css';
import React from 'react';

function Explanation()
{
    return(
        <div className="jumbotron">
            <h1 className="explanationH1">Welcome to PetFinder!</h1>
            <p className="introText">Our goal is to unite pets with their forever families.</p>
            <hr className="headerline"></hr>
        </div>
    );
}

export default Explanation;