import React from 'react';
import './navLink.css'

function NavLink(props) {
  
  return (
    <div className="navigation-hover">
      <p><a className="navigation-links" href={props.link}>{props.name}</a></p>
    </div>
  );
}

export default NavLink;
