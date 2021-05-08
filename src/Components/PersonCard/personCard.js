import React from 'react';
import './personCard.css'

function PersonCard(props) {
  const {className, photo, name, position} = props;
  
  return (
    <div className={`${ className || '' } person-info`}>
      <img className="person-photo" src={process.env.PUBLIC_URL + photo} alt=""/>
      <h2 className="person-name">{name}</h2>
      <p className="peron-position">{position}</p>
    </div>
  );
}

export default PersonCard;
