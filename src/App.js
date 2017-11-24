import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import ContentDetail from './content-detail/contentDetail';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="row">
          <Router>
            <div class="col-md-12">
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={ContentDetail}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
