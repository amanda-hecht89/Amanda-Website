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
      <div className={ reveal ? 'reveal' : 'hide' }>
        <div className='shellOne'>
            ASPEN
          <img className='shell' src='./Images/colorado2.png' height='200'/>
          <img className='ball' src='./Images/yeti.png' height='150'/>
          <div className='shellButton'>
            <button className='button1'>PICK HERE</button>
          </div>
        </div>
        <div className='shellTwo'>
            ESTES PARK
          <img className='shell' src='./Images/colorado2.png' height='200'/>
          <img className='ball' src='./Images/yeti.png' height='150'/>
          <div className='shellButton'>
            <button className='button1'>PICK HERE</button>
          </div>
        </div>
        <div className='shellThree'>
            BRECKENRIDGE
          <img className='shell' src='./Images/colorado2.png' height='200'/>
          <img className='ball' src='./Images/yeti.png' height='150'/>
          <div className='shellButton'>
            <button className='button1'>PICK HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
