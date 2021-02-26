import React from 'react';
import './servicesSlide.css'

class ServicesSlide extends React.Component {
  render() {
    return (
      <div className="slide">
        <img className="slide-img"
             src={process.env.PUBLIC_URL + "assets/bw-div.png"} alt=""/>
      </div>
    );
  }
}

export default ServicesSlide;
