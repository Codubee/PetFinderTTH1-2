import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import LandingPage from './views/LandingPage'
import NavBar from './components/Navbar'
import MatchPage from './views/MatchPage'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage /> 
          </Route>
          <Route path="/home">
            <LandingPage /> 
          </Route>
          <Route path="/match">
            <MatchPage />
          </Route>
        </Switch>    
      </Router> 
    </div>

  );
}

export default App;
