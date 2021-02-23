import React from 'react';
import './teamSlide.css'

class TeamSlide extends React.Component {
  render() {
    return (
      <div className="wb-slide">
        <img className="wb-img" src={ process.env.PUBLIC_URL + "assets/wb-div.png"} alt=""/>
      </div>
    );
  }
}

export default TeamSlide;
