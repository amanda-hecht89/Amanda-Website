import React from 'react';
import './App.css';
import './Fancy.css';
import Projects from './Projects';


export default function Welcome() {
  return (
    <div>


      <div className='welcome'>
        <div className='photo2' >
          <img src='/Images/myname1.png 'height='475' width='650'/>
        </div>
        <div className='about'>
          <div className='paragraph'>
            <p className='para1'>
            Im a Software Engineer out of Denver CO with a background in Barbering and Beauty.
            </p>
          </div>
        </div>
        <div>
          <Projects/>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
