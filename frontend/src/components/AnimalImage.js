import React from 'react';
import '../styles/AnimalImage.css';

function AnimalImage(props) {
    return (
      <div id="animalImage">
          <img src={props.image} altText={props.altText}/>
      </div>
    );
  }
  
  export default AnimalImage;
  