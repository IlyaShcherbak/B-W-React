import React from 'react';
import './storyRow.css';

function StoryRow(props) {
  const { type, title, text, isSelected, onClick } = props;

  const emptyCell = <div className="empty-cell"/>;
  const contentCell = (
    <div className="story-cell">
      <h1 className={`${ type === 'left' ? 'header-right':'' } story-year`} onClick={onClick} >{title}</h1>
      { isSelected && <p className="story-text">{text}</p> }
    </div>
  );


  return (
    <>
      {type === 'left' ? contentCell : emptyCell}
      
      <div className="white-line">
        {
          type !== 'empty' && (
            <div className="circle-display" onClick={onClick}>
              <div className={`story-circle ${isSelected ? 'great-circle' : ''}`}/>
            </div>
          )
        }
      </div>
      
      {type === 'right' ? contentCell : emptyCell}
    </>
  );
}

export default StoryRow;
