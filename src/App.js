import React, { Component } from 'react';
import Header from './components/header/header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "./containers/homepage";
import Fovourites from "./containers/favourites";
import store from './store'
import { Provider } from "react-redux";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <div className="MainScreen">
            <Header />
              <Route exact path="/" component={HomePage} />
            <Route path="/fav" component={Fovourites} />
          </div>
        </div>
      </Router>
</Provider>
    );
  }
}

export default App;
