import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Todos from "./components/Todos";




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
          <Route path="/todos">
                    <Todos />
                </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
