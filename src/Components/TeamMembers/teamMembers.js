import React from 'react';
import './teamMembers.css'
import PersonCard from '../PersonCard/personCard';


class TeamMembers extends React.Component {
  
  data = [
    {
      photo: '/assets/Person-1.png',
      name: 'mark once',
      position: 'front-end developer'
    },
    {
      photo: '/assets/Person-2.png',
      name: 'justin twice',
      position: 'founder & ceo'
    },
    {
      photo: '/assets/Person-3.png',
      name: 'antonio never',
      position: 'qa engineer & manager'
    },
    
  ];
  
  
  render() {
    return (
      <div className="team-members">
        <PersonCard
          photo={this.data[0].photo}
          name={this.data[0].name}
          position={this.data[0].position}
        />
        
      </div>
    );
  }
}

export default TeamMembers;
