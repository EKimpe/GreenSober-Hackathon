import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Quiz from './components/Quiz';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/quiz' component={Quiz} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
