import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Education from './Education';
import ContactMe from './ContactMe';
import Welcome from './Welcome';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='app'>

        <nav className="nav-header">
          <Link className="nav-items" to="/">Home</Link> 
          <Link className='nav-items' to="/education">My History</Link>
          <Link className="nav-items" to="/credits">Contact Me</Link>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/credits">
            <ContactMe />
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}