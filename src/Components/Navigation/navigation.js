import React from 'react';
import './navigation.css';
import NavLink from '../NavLink/navlink';

function Navigation() {
  const navArr = [
    { name: 'Home', link: '#home-id'},
    { name: 'About Us', link: '#story-id'},
    { name: 'Team', link: '#team-id'},
    { name: 'Services', link: '#services-id'},
    { name: 'Blog', link: '#blog-id"'},
    { name: 'Contact Us', link: '#contacts-id'},
  ];
  
  return (
    <div className="navigation">
      <div className="navigation-text">
        {
          navArr.map((nav, i) =>
                       <NavLink key={i} name={nav.name} link={nav.link}/>)
        }
      </div>
      <div className="logo">H</div>
      <div className="navigation-text">
      
      </div>
    </div>
  )
}

export default Navigation;
