import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <div className='projects'>
        <div className='alsolinks'>
          <h2>Amandas Arcade</h2>
          <a href="https://amandarcade.netlify.app/" target="/blank"><img src="/images/arcade.jpg" className="icon" /></a>
          <p>This is a webiste I made to hold all the game apps I made. Some are react most are JavaScript. Enjoy!</p>
        </div>
        <div className='alsolinks'>
          <h2>HYNT</h2>
          <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/hynt.png" className="icon" /></a>
          <p>Here is a link to HYNT, a text adventure game.The first group project I ever did. Made on Vanilla JavaScript. </p>
        </div>
        <div className='alsolinks'>
          <h2>PAAC</h2>
          <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/paac.png" className="icon" /></a>
          <p>Here is a link to PAAC, a saltwater outsourced database. The second group project I did. Made on React </p>
        </div>
        <div className='alsolinks'>
          <h2>PIXIE.JS</h2>
          <a href="https://pixie-tarot-api.herokuapp.com/" target="/blank"><img src="/images/pixie2.png" className="icon" /></a>
          <p>Here is a link to Pixie.js, a tarot card API. The third group project I did. Made on JavaScript, backend heavy. </p>
        </div>
        <div className='alsolinks'>
          <h2>Happy Tails</h2>
          <a href="https://happy-tails-dogpark.herokuapp.com/" target="/blank"><img src="/images/HappyTails.png" className="icon" /></a>
          <p>Happy Tails is a mono repo full stack app using the Yelp API to hit a dogpark endpoint. Wrote with full crud on React. </p>
        </div>
      </div>
    </div>
  );
}
