import React, { useState } from 'react';
import './ShellGame.css';

export default function ShellGame() {

  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [reveal, setReveal] = useState(false);

  function handleShellOneClick() {

  }

  function handleShellTwoClick() {

  }

  function handleShellThreeCLick() {

  }


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
          <div className='shellsss'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button className='button'>PICK HERE</button><br/><br/><br/><br/>
          <h2>ESTES PARK</h2>
          <div className='shellsss'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button className='button'>PICK HERE</button><br/><br/><br/><br/>
          <h2>BRECKENRIDGE</h2>
          <div className='shellsss'>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className='ball' src='./Images/yeti.png' height='150'/>
          </div>
          <button className='button'>PICK HERE</button>
        </div>
      </div>






      <div className='results'>
        <h2>RESULTS!</h2>
        <div>
          <p className='para4'>
            WINS:
            <span className='win'>0</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            LOSSES:
            <span className='loses'>0</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            TOTAL GAMES:
            <span className='total'>0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
