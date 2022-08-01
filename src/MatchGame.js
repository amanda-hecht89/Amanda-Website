import { useState } from 'react';
import './MatchGame.css';
import SingleMatchCard from './SingleMatchCard';

const cardImages = [
  { 'src': '/Images/blue.png' },
  { 'src': '/Images/grey.png' },
  { 'src': '/Images/green.png' },
  { 'src': '/Images/purple.png' },
  { 'src': '/Images/pink.png' },
  { 'src': '/Images/orange.png' },
];

export default function MatchGame() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    console.log(card);

  };



  return (
    <div className='matchApp'>
      <h1>Match Game!</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div>
        {cards.map(card => (
          <SingleMatchCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}/>
          
        ))}
      </div>
    </div>
  );
}
