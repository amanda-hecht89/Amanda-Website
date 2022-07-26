import React from 'react';
import './App.css';
import './Fancy.css';


export default function Welcome() {
  return (
    <div>


      <div className='WelHead'>
        <h1>WELCOME</h1>
        <h2>AMANDA HECHT</h2>
        <img className='photo1' src='/Images/amanda1.jpeg' height='500' />
      </div>

      <div className='WelBody'>
        <p className='para1'>
        I'm a Software Engineer with a background in Barbering and Beauty. I'm a creative person and a huge animal lover. Making lots of awesome changes in my life and ready to start a new chapter in my life.
        </p>
      </div>


    </div>
  );
}
