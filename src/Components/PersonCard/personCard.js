import React from 'react';
import './personCard.css'

function PersonCard(props) {
  const {photo, name, position} = props;
  return (
    <div className="person-info">
      <img className="person-photo" src={photo} alt=""/>
      <h2 className="person-name">{name}</h2>
      <p className="peron-position">{position}</p>
    </div>
  );
}

export default PersonCard;
