import React from 'react';
import './services.css'
import ServicesTitle from '../ServicesTitle/servicesTitle';
import ServicesContent from '../ServicesContent/servicesContent';
import ServicesBlog from '../ServicesBlog/servicesBlog';
import ServicesSlide from '../ServicesSlide/servicesSlide';

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="services">
          <div className="section">
            <ServicesTitle/>
            <ServicesContent/>
            <ServicesBlog/>
          </div>
        </div>
        <ServicesSlide/>
      </>
      
    );
  }
}

export default Services;
