import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Quiz from "./components/Quiz";
import Blog from "./components/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
