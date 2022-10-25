import React from 'react';
import './App.css';
import './Fancy.css';


export default function Welcome() {
  return (
    <div>


      <div className='welcome'>
        <h1>WELCOME</h1>
        <h2>AMANDA HECHT</h2>
        <div className='about'>
          <img className='photo1' src='/Images/amanda1.jpeg 'height='475' width='400'/>
          <div className='paragraph'>
            <p className='para1'>
            Im a Software Engineer with a background in Barbering and Beauty.<br /> 
            Im a creative person and a huge animal lover.<br/> 
            Making lots of awesome changes in my life and ready to start a new chapter in my life.
            This website is a working portfolio of everything that I can do. <br/>
            React, CSS, HTML, Material UI, Keyframes, etc! <br/>
            I hope you enjoy looking at it as much as I have making it! <br/>
            If you have any questions please reach out! <br/>
            Id love to hear from you.
            </p>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
