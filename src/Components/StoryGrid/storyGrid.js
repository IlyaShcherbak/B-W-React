import React from 'react';
import './storyGrid.css'
import StoryRow from '../StoryRow/storyRow';

class StoryGrid extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedRowIndex: -1,
    };
  }
  
  data = [
    {
      title: 2011,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed volutpat quam.',
    },
    {
      title: 2012,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus vel elit ac lobortis.',
    },
    {
      title: 2013,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed volutpat quam. Donec cursus vel\n' +
        'elit ac lobortis. Etiam purus tortor vel, finibus nec magna. Morbi ut consequat ante.',
    },
    {
      title: 2014,
      text: 'Phasellus sagittis ultrices suscipit. Integer malesuada pretium vehicula.',
    },
  ];
  
  getRowTypeByIndex(i) {
    return (i % 2 === 0) ? 'left' : 'right';
  };
  
  onSelectRow(i) {
    this.setState((prevState) => ({ selectedRowIndex: prevState.selectedRowIndex !== i ? i : -1}));
  };
  
  render() {
    const { selectedRowIndex } = this.state;
    
    return (
      <div className="section story-grid">
        {
          this.data.map((dat, i ) => {
            const type = this.getRowTypeByIndex(i);

            return (
              <>
                {i === 0 && <StoryRow key={i-1} type="empty"/>}
                
                <StoryRow
                  key={i}
                  isSelected={ selectedRowIndex === i }
                  type={type}
                  title={dat.title}
                  text={dat.text}
                  onClick={() => this.onSelectRow(i)}
                />
                
                {i === this.data.length - 1 && <StoryRow key={i+1} type="empty"/>}
              </>
            );
          })
        }
      </div>
    );
  }
}

export default StoryGrid;
