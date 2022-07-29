import React, { useState } from 'react';
import Toggle from './Toggle';
import toggle from './Toggle';


export default function AboutMe() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        My Dogs! click to see pics!
        <Toggle toggle={toggle}/>
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'ARYA' : 'BOULDER'}</button>
      </div>
    </div>
  );
}
