import React from 'react';
import './servicesBlog.css'

class ServicesBlog extends React.Component {
  
  render() {
    return (
      <div className="services-blog">
        <button className="services-blog-button">visit our blog</button>
        <img className="services-image" src={process.env.PUBLIC_URL + 'assets/Background-text.png'} alt=""/>
      </div>
    );
  }
}

export default ServicesBlog;
