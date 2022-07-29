import React, { useState } from 'react';
import './ShellGame.css';

export default function ShellGame() {

  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [reveal, setReveal] = useState(false);

  function handleShellClick(guess) {
    const randomNum1 = Math.ceil(Math.random() * 3);
    if (randomNum1 === guess) {
      `ball${guess}`.classList.add('reveal');
      setWin(win + 1) ;
    } else {
      `ball${randomNum1}`.classList.add('reveal');
      setLoss(loss + 1);
    }}


  return (
    <div>
      <h1>Shell Game</h1>
      <div className='explain'>
        <p className='para3'>
            This game was something I learned how to do the second week of school
            on Vanilla JavaScript.<br/> Once I learned ReAct, I decided this would be a fun thing
            to learn to rebuid in ReAct for use in my portfolio. ENJOY!
        </p>
        <p className='para3'>
            Welcome to Colorado! I love living here and doing all the wonderful things there
            there is to do here, include hiking. But be careful, you might spot a YETI!!!!!
        </p>
      </div>
      <div className='shellGame'>
        <div className={ reveal ? 'reveal' : 'hide' }>
          <h2>ASPEN</h2>
          <div className='shellsss shell1'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button onClick={() => handleShellClick(1)} className='button'>PICK HERE</button><br/><br/><br/><br/>
          <h2>ESTES PARK</h2>
          <div className='shellsss shell2'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button onClick={() => handleShellClick(2)} className='button'>PICK HERE</button><br/><br/><br/><br/>
          <h2>BRECKENRIDGE</h2>
          <div className='shellsss shell3'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button onClick={() => handleShellClick(3)} className='button'>PICK HERE</button>
        </div>
      </div>






      <div className='results'>
        <h2>RESULTS!</h2>
        <div>
          <p className='para4'>
            WINS:
            <span className='win'>{win}</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            LOSSES:
            <span className='loses'>{loss}</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            TOTAL GAMES:
            <span className='total'>{win + loss}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
