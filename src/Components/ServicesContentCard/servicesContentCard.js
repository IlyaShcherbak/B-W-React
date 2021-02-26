import React from 'react';
import './servicesContentCard.css'

class ServicesContentCard extends React.Component {
  
  render() {
    const { image, title, description } = this.props;
    return (
      <div className="services-content-card">
        <div className="services-icon-border">
          <img className="services-icon" src={image} alt=""/>
        </div>
        <h2 className="service-name">{title}</h2>
        <p className="service-description">{description}</p>
      </div>
    
    );
  }
}

export default ServicesContentCard;
