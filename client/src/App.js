import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Story from "./pages/Story";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Story} />
        <Route exact path="/favorites" component={Favorites} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
