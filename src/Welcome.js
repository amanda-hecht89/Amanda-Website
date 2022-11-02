import React from 'react';
import './App.css';
import Projects from './Projects';


export default function Welcome() {
  return (
    <div>
      <div className='welcome'>
        <div className='photo2' >
          <img src='/Images/myname4.png 'height='350' width='auto'/>
        </div>
        <div className='about'>
          <div className='paragraph'>
            <p className='para1'>
            Im a Software Engineer out of Denver CO with a background in Barbering and Beauty.
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='pros'>
            <h3>My Projects!</h3>
            <Projects/>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
