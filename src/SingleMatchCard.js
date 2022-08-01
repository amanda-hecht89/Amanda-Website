import React from 'react';
import './SingleMatchCard.css';

export default function SingleMatchCard({ card, handleChoice }) {

  const handleClick = () => {
    handleChoice(card);
        
  };



  return (
    <div className='cardGrid'>
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
  );
}
