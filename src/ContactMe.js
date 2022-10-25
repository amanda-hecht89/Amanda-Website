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
              <a href="https://www.canva.com/design/DAFDJxHVwfM/QWny1HkM4459_fV9YhtU1A/view?utm_content=DAFDJxHVwfM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="/blank"><img src="/images/resume.jpg" className="icon" /></a>
              <p>Here is a link to my Resume</p>
            </div>
          </div>
          
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
