import { useState } from 'react';
import './MatchGame.css';

const cardImages = [
  { 'src': '/Images/blue.png' },
  { 'src': '/Images/grey.png' },
  { 'src': '/Images/green.png' },
  { 'src': '/Images/purple.png' },
  { 'src': '/Images/pink.png' },
  { 'src': '/Images/green.png' },
];

export default function MatchGame() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };


  
  return (
    <div className='matchApp'>
      <h1>Match Game!</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}
