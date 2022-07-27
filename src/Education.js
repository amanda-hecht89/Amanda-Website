import React from 'react';
import Accordion from './Accordion';
export default function Education() {
  return (
    <div>
      <h1>EDUCATION</h1>
      <div>
        <Accordion/>
      </div>
      <h1>TRAVEL</h1>
      <div>
        <img src='/Images/georigatext.png' height='300' className='life'/>
        <img src='/Images/colorado1text.png' height='300' className='life'/>
        <img src='/Images/washtext.png' height='300' className='life'/>
        <img src='/Images/calitext.png' height='300' className='life'/>
        <img src='/Images/colorado2text.png' height='300' className='life'/>
      </div>
      <img src='/Images/travel.jpeg' height='350' className='travel'/>

      <footer></footer>
    </div>
  );
}



