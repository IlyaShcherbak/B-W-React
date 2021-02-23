import React from 'react';
import './team.css'
import TeamTitle from '../TeamTitle/teamTitle';
import TeamMembers from '../TeamMembers/teamMembers';
import TeamSlide from '../TeamSlide/teamSlide';


class Team extends React.Component {
  render() {
    return (
      <>
        <div className="team section">
          <TeamTitle/>
          <TeamMembers/>
        </div>
        <TeamSlide/>
      </>
      
    
    );
  }
}

export default Team;
