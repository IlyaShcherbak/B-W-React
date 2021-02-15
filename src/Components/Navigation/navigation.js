import React from 'react';
import './navigation.css';

function Navigation() {
  
  return (
    <div className="navigation">
      <div className="navigation-text">
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#home-id">Home</a></p>
        </div>
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#story-id">About Us</a></p>
        </div>
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#team-id">Team</a></p>
        </div>
      </div>
      <div className="logo">H</div>
      <div className="navigation-text">
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#services-id">Services</a>
          </p>
        </div>
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#services-blog-id">Blog</a>
          </p>
        </div>
        <div className="navigation-hover">
          <p><a className="navigation-links" href="#contacts-id">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
