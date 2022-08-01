import React from 'react';
import './SingleMatchCard.css';

export default function SingleMatchCard({ card, handleChoice, flipped }) {

  const handleClick = () => {
    handleChoice(card);
        
  };



  return (
    <div>
      <div className={flipped ? 'flipped' : ''}>

        <div className='card'>
          <img 
            className='front' 
            src={card.src} 
            height='200'/>
          <img 
            className='back'
            src='/Images/cover.png' 
            onClick={handleClick} 
            height='200' />

        </div>
      </div>
    </div>
  );
}
