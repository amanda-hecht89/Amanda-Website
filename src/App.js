import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import ContactMe from './ContactMe';
import Projects from './Projects';
import Welcome from './Welcome';
import './App.css';
import './Fancy.css';


export default function App() {
  return (
    <Router>
      <div className='app'>

        <nav className="nav-header">
          <Link className="nav-items" to="/">Home</Link> 
          <Link className="nav-items" to="/projects">My Projects</Link>
          <Link className="nav-items" to="/credits">Contact Me</Link>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/credits">
            <ContactMe />
          </Route>
        </Switch>
      </div>
      <div>
        <p>eventually the carousel will go here</p>

      </div>
    </Router>


  );
}