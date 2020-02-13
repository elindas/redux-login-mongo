import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
