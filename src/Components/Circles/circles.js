import React from 'react';
import './circles.css'

function Circle(props) {
  let type = ( props.type>=1 && props.type < 3) ? props.type : 3;
  
  return (
    <div className="circle-row">
      <div className={`circle-all circle-${type}`}/>
    </div>
  );
  
}

function Circles() {
  
  return (
    <div className="circles">
      <Circle type={1}/>
      <Circle type={2}/>
      <Circle type={3}/>
    </div>
  );
}

export default Circles;
