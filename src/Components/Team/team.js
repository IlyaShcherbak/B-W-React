import React from 'react';
import './team.css'
import TeamTitle from '../TeamTitle/teamTitle';
import TeamMembers from '../TeamMembers/teamMembers';


class Team extends React.Component {
  render() {
    return (
      <div className="team section">
        <TeamTitle/>
        <TeamMembers/>
      </div>
    
    );
  }
}

export default Team;
