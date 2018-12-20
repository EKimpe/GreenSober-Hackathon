<<<<<<< HEAD
import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Quiz from "./components/Quiz";
import Blog from "./components/Blog";
import Twitter from "./components/Twitter";
=======
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Quiz from './components/Quiz';
import Blog from './components/Blog';
>>>>>>> 03e1e408ef4d88ffc52cc8a62ab8b5e0ebcffbf1

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BrowserRouter>
          <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={Accueil} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/blog" component={Blog} />
            <Route path="/twitter" component={Twitter} />
=======
            <Route exact path='/' component={Homepage} />
            <Route path='/quiz' component={Quiz} />
            <Route path='/blog' component={Blog} />
>>>>>>> 03e1e408ef4d88ffc52cc8a62ab8b5e0ebcffbf1
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
