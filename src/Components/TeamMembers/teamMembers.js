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
  
  getClassNameByIndex(i) {
    return (i % 2 === 0) ? 'down' : 'up';
  };
  
  render() {
    return (
      <div className="team-members">
        {
          this.data.map((dat, i) => {
            const className = this.getClassNameByIndex(i);
            
            return (
              <PersonCard
                key={i}
                className={className}
                photo={dat.photo}
                name={dat.name}
                position={dat.position}
              />
            );
          })
        }
        
      </div>
    );
  }
}

export default TeamMembers;
