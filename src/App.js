import StarterScreen from "./Starter-screen";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Goals from "./Goals";
import PersonalInfo from "./Personal-info";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <StarterScreen />
          </Route>
          <Route path="/goals">
            <Goals />
          </Route>
          <Route path="/create-account">
            <PersonalInfo />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
