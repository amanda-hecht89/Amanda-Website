import React from 'react';

export default function ContactMe() {
  return (
    <div>
      <div>
        <h1>contact me</h1>
        <div className='links'>
          <div className='profiles'>
            <div className='alsolinks'>
              <h2>LinkedIn</h2>
              <a href="https://www.linkedin.com/in/amanda-hecht/" target="/blank"><img src="/images/LinkedIn-icon.png" className="icon" /></a>
              <p>Click here for my<br /> LinkedIn Profile</p>
            </div>
            <div className='alsolinks'>
              <h2>GitHub</h2>
              <a href="https://github.com/amanda-hecht89" target="/blank"><img src="/images/GitHub-icon.png" className="icon" /></a>
              <p>Click here to go to my<br /> Github Repo</p>
            </div>
            <div className='alsolinks'>
              <h2>RESUME</h2>
              <a href="https://www.canva.com/design/DAFDJxHVwfM/Uxf0i951TLe4zh5BIg70ug/view?utm_content=DAFDJxHVwfM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
                target="/blank"><img src="/images/resume.jpg" className="icon" /></a>
              <p>Here is a link to my Resume</p>
            </div>
          </div>
          <div className='projects'>
            <div className='alsolinks'>
              <h2>HYNT</h2>
              <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/hynt.png" className="icon" /></a>
              <p>Here is a link to HYNT, <br /> a text adventure game.<br /> The first group project I ever did. <br /> Made on Vanilla JavaScript. </p>
            </div>
            <div className='alsolinks'>
              <h2>PAAC</h2>
              <a href="https://benevolent-jalebi-781aea.netlify.app/" target="/blank"><img src="/images/paac.png" className="icon" /></a>
              <p>Here is a link to PAAC, <br /> a saltwater outsourced database. <br /> The second group project I did. <br /> Made on React </p>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
