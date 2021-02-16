import React from 'react';
import './homeContent.css'

function HomeContent() {
  
  return(
    <div className="home-border">
      <div className="home-content">
        <h1 className="title">We build it with passion</h1>
        <p className="title-remark">Just to be clear, we do this for fun not for
          you, just kidding.</p>
        <button className="read-more-button">read more</button>
      </div>
    </div>
  );
  
}

export default HomeContent;
