import React from 'react';
import './buildings.css';

class Buildings extends React.Component {
  render() {
    return (
      <div className="buildings">
        <img className="building buildings-black" src={process.env.PUBLIC_URL + "/assets/Buildings_Black.png"} alt=""/>
        <img className="building buildings-white" src={process.env.PUBLIC_URL + "/assets/Buildings_White.png"} alt=""/>
      </div>
    
    );
  }
}

export default Buildings;
