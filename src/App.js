import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Welcome from './Welcome';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='app'>

        <nav className="nav-header">
          <div className='profiles'>
            <div className='alsolinks'>
              <a href="https://www.linkedin.com/in/amanda-hecht/" target="/blank"><img src="/images/LinkedIn-icon.png" className="icon" /></a>
            </div>
            <div className='alsolinks'>
              <a href="https://github.com/amanda-hecht89" target="/blank"><img src="/images/GitHub-icon.png" className="icon" /></a>
            </div>
            <div className='alsolinks'>
              <a href="https://www.canva.com/design/DAFDJxHVwfM/QWny1HkM4459_fV9YhtU1A/view?utm_content=DAFDJxHVwfM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                target="/blank"><img src="/images/resume.jpg" className="icon" /></a>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}