import React from 'react';
import './teamSlide.css'

class TeamSlide extends React.Component {
  render() {
    return (
      <div className="slide">
        <img className="slide-img" src={ process.env.PUBLIC_URL + "assets/wb-div.png"} alt=""/>
      </div>
    );
  }
}

export default TeamSlide;
