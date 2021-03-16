import StarterScreen from "./Starter-screen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./Goals";
import PersonalInfo from "./Personal-info";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/trime-app">
            <StarterScreen />
          </Route>
          <Route path="/trime-app/goals">
            <Goals />
          </Route>
          <Route path="/trime-app/create-account">
            <PersonalInfo />
          </Route>
          <Route path="/trime-app/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
