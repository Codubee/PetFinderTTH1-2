import React from 'react';
import Explanation from '../components/Explanation'
import Features from '../components/Features'
import Team from '../components/Team';
import Tools from '../components/Tools'

function LandingPage(){
    return(
        <div>
            <Explanation />
            <Features />
            <Team/>
            <Tools/>
        </div>
    )
}

export default LandingPage;
