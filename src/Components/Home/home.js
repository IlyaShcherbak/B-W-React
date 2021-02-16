import React from 'react';
import './home.css'
import Navigation from '../Navigation/navigation';
import HomeContent from '../HomeContent/homeContent';
import Circles from '../Circles/circles';

class Home extends React.Component{
  render() {
    return(
      <div className="home">
        <Navigation/>
        <HomeContent/>
        <Circles/>
      </div>
    );
  }
}

export default Home;
