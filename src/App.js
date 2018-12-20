import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Quiz from "./components/Quiz";
import Blog from "./components/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/blog" component={Blog} />
            <Route path="/twitter" component={Twitter} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
