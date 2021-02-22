import React from 'react';
import './story.css'
import StoryGrid from '../StoryGrid/storyGrid';
import Buildings from '../Buildings/buildings';

class Story extends React.Component{
  render() {
    return(
      <div className="story">
        <StoryGrid/>
        <Buildings/>
      </div>
      
    );
  }
}

export default Story;
