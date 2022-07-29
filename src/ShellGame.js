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
    <div><h1>Shell Game</h1>
      <div className='explain'>
        <p>
            This game was something I learned how to do like the second week of school<br/>
            on Vanilla JavaScript. Once I learned ReAct, I decided this would be a fun thing <br/>
            to learn to rebuid in ReAct for use in my portfolio. ENJOY!
        </p>
        <p>
            Welcome to Colorado! I love living here and doing all the wonderful things there <br/>
            there is to do here, include hiking. But be careful, you might spot a YETI!!!!!
        </p>
      </div>
      <div className={ reveal ? 'reveal' : 'hide' }>
        <div className='shellOne'>
            SHELL 1
        </div>
        <div className='shellTwo'>
            SHELL 2
        </div>
        <div className='shellThree'>
            SHELL 3
        </div>

      </div>
    </div>
  );
}
