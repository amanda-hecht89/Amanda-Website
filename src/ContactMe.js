import React from 'react';

export default function ContactMe() {
  return (
    <div>
      <div>
        <h1>contact me</h1>
        <div className='links'>
          <div>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/amanda-hecht/" target="/blank"><img src="/images/LinkedIn-icon.png" className="icon" /></a>
          </div>
          <div>
            <h2>GitHub</h2>
            <a href="https://github.com/amanda-hecht89" target="/blank"><img src="/images/GitHub-icon.png" className="icon" /></a>
          </div>
          <div>
            <h2>HYNT</h2>
            <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/hynt.png" className="icon" /></a>
            <p>Here is a link to HYNT, a text adventure game. The first group project I ever did. Made on Vanilla JavaScript. </p>
          </div>
          <div>
            <h2>PAAC</h2>
            <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/paac.png" className="icon" /></a>
            <p>Here is a link to PAAC, a saltwater outsourced database. The second group project I did. Made on React </p>
          </div>
        </div>
      </div>
    </div>
  );
}
