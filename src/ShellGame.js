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
    <div>SHELLGAME

      <div className={ reveal ? 'reveal' : 'hide' }>

      </div>
    </div>
  );
}
